import React, { useState, useCallback } from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle, Loader2, Edit2, X, Download } from 'lucide-react';
import * as mammoth from 'mammoth';

// Escape special regex characters
const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Resume Parser - Extracts data from resume text
const parseResumeText = (text) => {
  const data = {
    fullName: '',
    email: '',
    phone: '',
    skills: [],
    education: [],
    experience: []
  };

  // Extract email
  const emailRegex = /[\w.+-]+@[\w.-]+\.\w+/g;
  const emails = text.match(emailRegex);
  if (emails && emails.length > 0) {
    data.email = emails[0];
  }

  // Extract phone - improved to handle 10-digit Indian numbers
  const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}|\d{10}/g;
  const phones = text.match(phoneRegex);
  if (phones && phones.length > 0) {
    data.phone = phones[0];
  }

  // Extract name - improved to handle all caps names
  const lines = text.split('\n').filter(line => line.trim());
  const firstLines = lines.slice(0, 10);
  for (let line of firstLines) {
    const trimmed = line.trim();
    // Skip common headers
    if (trimmed.toLowerCase().includes('profile') || 
        trimmed.toLowerCase().includes('summary') ||
        trimmed.toLowerCase().includes('resume') ||
        trimmed.toLowerCase().includes('cv')) {
      continue;
    }
    
    if (trimmed && !trimmed.includes('@') && !trimmed.match(/\d{6,}/) && trimmed.length < 60 && trimmed.length > 5) {
      // Match all caps names or regular capitalized names
      if (/^[A-Z][A-Z\s]+$/.test(trimmed) || /^[A-Z][a-z]+\s+[A-Z][a-z]+/.test(trimmed)) {
        // Extract just the name part if there are multiple segments
        const namePart = trimmed.split(/\s{2,}|,|\||•|WEB|MOBILE|DEVELOPER|ENGINEER|MANAGER/i)[0].trim();
        if (namePart.length > 5 && namePart.split(' ').length >= 2) {
          data.fullName = namePart;
          break;
        }
      }
    }
  }

  // Extract skills (common programming languages and technologies)
  const skillKeywords = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'HTML', 'CSS', 'TypeScript', 
    'Angular', 'Vue', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Git', 'Agile', 'C\\+\\+', 'C#', '.NET',
    'Spring', 'Django', 'Flask', 'Express', 'PostgreSQL', 'MySQL', 'Redis', 'GraphQL', 'REST', 'API',
    'Azure', 'GCP', 'Jenkins', 'CI/CD', 'Linux', 'Windows', 'macOS', 'Android', 'iOS', 'Swift',
    'Kotlin', 'PHP', 'Ruby', 'Rails', 'Go', 'Rust', 'Scala', 'R', 'MATLAB', 'TensorFlow',
    'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'Excel', 'Tableau', 'Power BI',
    'Figma', 'Sketch', 'Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'After Effects',
    'React Native', 'Redux', 'Axios', 'Firebase', 'Bootstrap', 'Tailwind', 'Material-UI',
    'jQuery', 'Webpack', 'Babel', 'ESLint', 'Jest', 'Mocha', 'Selenium', 'Postman',
    'GitHub', 'GitLab', 'Bitbucket', 'JIRA', 'Confluence', 'Slack', 'REST API', 'RESTful'
  ];
  
  const foundSkills = new Set();
  skillKeywords.forEach(skill => {
    try {
      // Use case-insensitive search with word boundaries
      const regex = new RegExp(`\\b${skill}\\b`, 'gi');
      if (regex.test(text)) {
        // Store the original case version
        const displaySkill = skill.replace(/\\\+/g, '+').replace(/\\\./g, '.');
        foundSkills.add(displaySkill);
      }
    } catch (e) {
      // Skip skills that cause regex errors
      console.warn(`Skipping skill ${skill} due to regex error`);
    }
  });
  
  // Also extract from Professional Skills section if it exists
  const skillSectionMatch = text.match(/professional\s+skill[s]?[\s\S]*?(?=work\s+experience|education|projects|$)/i);
  if (skillSectionMatch) {
    const skillSection = skillSectionMatch[0];
    const skillLines = skillSection.split(/\n|,|\s{2,}/).filter(line => line.trim());
    skillLines.forEach(line => {
      const trimmed = line.trim();
      // Add skills that look like technology names (2-20 chars, starts with capital or lowercase)
      if (trimmed.length > 1 && trimmed.length < 25 && 
          !trimmed.toLowerCase().includes('skill') &&
          /^[A-Za-z]/.test(trimmed)) {
        foundSkills.add(trimmed);
      }
    });
  }
  
  data.skills = Array.from(foundSkills);

  // Extract education
  const educationKeywords = ['Bachelor', 'Master', 'PhD', 'B.E.', 'B.Tech', 'M.E.', 'M.Tech', 'B.S.', 'M.S.', 'B.A.', 'M.A.', 'University', 'College', 'Institute', 'Degree', 'CGPA', 'GPA', 'Percentage'];
  const educationSectionMatch = text.match(/education[\s\S]*?(?=experience|work|skills|projects|certifications|professional|$)/i);
  
  if (educationSectionMatch) {
    const eduText = educationSectionMatch[0];
    const eduLines = eduText.split('\n').filter(line => line.trim());
    
    let currentEdu = '';
    eduLines.forEach((line, idx) => {
      if (idx === 0 && line.toLowerCase().trim() === 'education') return; // Skip header
      
      const trimmed = line.trim();
      
      // Check if this line contains education-related keywords
      const hasKeyword = educationKeywords.some(keyword => 
        trimmed.toLowerCase().includes(keyword.toLowerCase())
      );
      
      // Check if line contains a year (graduation year)
      const hasYear = /\d{4}/.test(trimmed);
      
      if ((hasKeyword || hasYear) && trimmed.length > 10) {
        // Remove bullet points and extra whitespace
        const cleaned = trimmed.replace(/^[•\-*]\s*/, '').trim();
        if (cleaned) {
          if (currentEdu) {
            data.education.push(currentEdu);
          }
          currentEdu = cleaned;
        }
      } else if (currentEdu && trimmed.length > 5 && !trimmed.toLowerCase().includes('education')) {
        // Continuation of previous education entry
        currentEdu += ' | ' + trimmed.replace(/^[•\-*]\s*/, '').trim();
      }
    });
    
    if (currentEdu) {
      data.education.push(currentEdu);
    }
  }

  // Extract experience
  const experienceKeywords = ['experience', 'work history', 'employment', 'professional experience'];
  let expStart = -1;
  
  for (let keyword of experienceKeywords) {
    const match = text.search(new RegExp(keyword, 'i'));
    if (match !== -1) {
      expStart = match;
      break;
    }
  }
  
  if (expStart !== -1) {
    const expSection = text.substring(expStart);
    const expEnd = expSection.search(/education|skills|projects|certifications/i);
    const expText = expEnd !== -1 ? expSection.substring(0, expEnd) : expSection.substring(0, 2000);
    
    const expLines = expText.split('\n').filter(line => line.trim());
    let currentExp = '';
    let expCount = 0;
    
    expLines.forEach((line, idx) => {
      if (idx === 0) return; // Skip header
      const trimmed = line.trim();
      
      // Detect job titles (usually capitalized, not too long, might have dates)
      if (trimmed && /^[A-Z]/.test(trimmed) && trimmed.length < 100 && !trimmed.startsWith('•') && !trimmed.startsWith('-')) {
        if (currentExp && currentExp.length > 20) {
          data.experience.push(currentExp.trim());
          expCount++;
          if (expCount >= 5) return; // Limit to 5 experiences
        }
        currentExp = trimmed.replace(/^[•\-*]\s*/, '');
      } else if (trimmed && currentExp) {
        currentExp += ' ' + trimmed.replace(/^[•\-*]\s*/, '');
      }
    });
    
    if (currentExp && currentExp.length > 20 && expCount < 5) {
      data.experience.push(currentExp.trim());
    }
  }

  // Remove duplicates and empty entries
  data.education = [...new Set(data.education)].filter(e => e.length > 10);
  data.experience = [...new Set(data.experience)].filter(e => e.length > 20);

  return data;
};

// Extract text from PDF using basic parsing
const extractTextFromPDF = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async (e) => {
      try {
        const typedarray = new Uint8Array(e.target.result);
        
        // Convert PDF bytes to text (basic extraction)
        let text = '';
        const decoder = new TextDecoder('utf-8');
        
        // Try to extract text streams from PDF
        const pdfText = decoder.decode(typedarray);
        
        // Extract text between stream objects
        const streamRegex = /stream\s*([\s\S]*?)\s*endstream/g;
        let match;
        
        while ((match = streamRegex.exec(pdfText)) !== null) {
          const streamContent = match[1];
          // Remove binary data and extract readable text
          const readable = streamContent.replace(/[^\x20-\x7E\n]/g, ' ');
          text += readable + ' ';
        }
        
        // Also try to extract text objects
        const textRegex = /\((.*?)\)/g;
        let textMatch;
        while ((textMatch = textRegex.exec(pdfText)) !== null) {
          if (textMatch[1] && textMatch[1].length > 2) {
            text += textMatch[1] + ' ';
          }
        }
        
        // Clean up the extracted text
        text = text
          .replace(/\s+/g, ' ')
          .replace(/\) \(/g, ' ')
          .replace(/\\n/g, '\n')
          .replace(/\\r/g, '')
          .trim();
        
        if (text.length < 50) {
          reject(new Error('Could not extract sufficient text from PDF. The file may be scanned or encrypted.'));
        } else {
          resolve(text);
        }
      } catch (error) {
        reject(new Error('Failed to parse PDF file'));
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read PDF file'));
    reader.readAsArrayBuffer(file);
  });
};

// File Upload Component
const ResumeUpload = ({ onFileUpload, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const handleChange = useCallback((e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      onFileUpload(file);
    }
  }, [onFileUpload]);

  return (
    <div className="w-full">
      <div 
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className="relative"
      >
        <input
          type="file"
          id="resume-upload"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="hidden"
          disabled={isLoading}
        />
        
        <label
          htmlFor="resume-upload"
          className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-all
            ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {isLoading ? (
              <Loader2 className="w-12 h-12 mb-4 text-blue-500 animate-spin" />
            ) : (
              <Upload className="w-12 h-12 mb-4 text-gray-400" />
            )}
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PDF or DOCX (MAX. 10MB)</p>
            {fileName && (
              <div className="mt-4 flex items-center gap-2 text-sm text-blue-600">
                <FileText className="w-4 h-4" />
                <span>{fileName}</span>
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

// Job Application Form Component
const JobApplicationForm = ({ formData, setFormData, autoFilledFields, onSubmit }) => {
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Job Application Form</h2>
      
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name {autoFilledFields.includes('fullName') && <span className="text-green-600 text-xs">✓ Auto-filled</span>}
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${autoFilledFields.includes('fullName') ? 'border-green-300 bg-green-50' : 'border-gray-300'}`}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email {autoFilledFields.includes('email') && <span className="text-green-600 text-xs">✓ Auto-filled</span>}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${autoFilledFields.includes('email') ? 'border-green-300 bg-green-50' : 'border-gray-300'}`}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone {autoFilledFields.includes('phone') && <span className="text-green-600 text-xs">✓ Auto-filled</span>}
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${autoFilledFields.includes('phone') ? 'border-green-300 bg-green-50' : 'border-gray-300'}`}
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">
            Skills {autoFilledFields.includes('skills') && <span className="text-green-600 text-xs ml-2">✓ Auto-filled</span>}
          </h3>
          <button
            type="button"
            onClick={() => addArrayItem('skills')}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            + Add Skill
          </button>
        </div>
        {formData.skills.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleArrayChange('skills', index, e.target.value)}
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                ${autoFilledFields.includes('skills') ? 'border-green-300 bg-green-50' : 'border-gray-300'}`}
              placeholder="e.g., React, Python, AWS"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('skills', index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">
            Education {autoFilledFields.includes('education') && <span className="text-green-600 text-xs ml-2">✓ Auto-filled</span>}
          </h3>
          <button
            type="button"
            onClick={() => addArrayItem('education')}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            + Add Education
          </button>
        </div>
        {formData.education.map((edu, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={edu}
              onChange={(e) => handleArrayChange('education', index, e.target.value)}
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                ${autoFilledFields.includes('education') ? 'border-green-300 bg-green-50' : 'border-gray-300'}`}
              placeholder="e.g., B.S. Computer Science, MIT, 2020"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('education', index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Work Experience */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">
            Work Experience {autoFilledFields.includes('experience') && <span className="text-green-600 text-xs ml-2">✓ Auto-filled</span>}
          </h3>
          <button
            type="button"
            onClick={() => addArrayItem('experience')}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            + Add Experience
          </button>
        </div>
        {formData.experience.map((exp, index) => (
          <div key={index} className="flex gap-2">
            <textarea
              value={exp}
              onChange={(e) => handleArrayChange('experience', index, e.target.value)}
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                ${autoFilledFields.includes('experience') ? 'border-green-300 bg-green-50' : 'border-gray-300'}`}
              placeholder="e.g., Software Engineer at Google (2020-2023) - Led development of..."
              rows="3"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('experience', index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={onSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5" />
          Submit Application
        </button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    skills: [''],
    education: [''],
    experience: ['']
  });
  const [autoFilledFields, setAutoFilledFields] = useState([]);

  const handleFileUpload = async (file) => {
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validate file type
      const validTypes = [
        'application/pdf', 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
        'application/msword'
      ];
      
      const fileExtension = file.name.toLowerCase().split('.').pop();
      const isValidType = validTypes.includes(file.type) || ['pdf', 'doc', 'docx'].includes(fileExtension);
      
      if (!isValidType) {
        throw new Error('Please upload a PDF or DOCX file');
      }

      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        throw new Error('File size must be less than 10MB');
      }

      let resumeText = '';

      // Parse DOCX files
      if (file.type.includes('word') || fileExtension === 'docx' || fileExtension === 'doc') {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        resumeText = result.value;
      } 
      // Parse PDF files
      else if (file.type === 'application/pdf' || fileExtension === 'pdf') {
        resumeText = await extractTextFromPDF(file);
      }

      if (!resumeText || resumeText.trim().length < 50) {
        throw new Error('Could not extract enough text from the resume. Please ensure the file is not encrypted or scanned.');
      }

      // Parse resume text
      const parsedData = parseResumeText(resumeText);
      
      // Track which fields were auto-filled
      const filledFields = [];
      
      // Update form with parsed data
      setFormData(prev => {
        const updated = { ...prev };
        
        if (parsedData.fullName) {
          updated.fullName = parsedData.fullName;
          filledFields.push('fullName');
        }
        if (parsedData.email) {
          updated.email = parsedData.email;
          filledFields.push('email');
        }
        if (parsedData.phone) {
          updated.phone = parsedData.phone;
          filledFields.push('phone');
        }
        if (parsedData.skills.length > 0) {
          updated.skills = parsedData.skills;
          filledFields.push('skills');
        }
        if (parsedData.education.length > 0) {
          updated.education = parsedData.education;
          filledFields.push('education');
        }
        if (parsedData.experience.length > 0) {
          updated.experience = parsedData.experience;
          filledFields.push('experience');
        }
        
        return updated;
      });

      setAutoFilledFields(filledFields);
      
      if (filledFields.length > 0) {
        setSuccess(`✓ Resume parsed successfully! ${filledFields.length} section(s) auto-filled.`);
      } else {
        setSuccess('Resume uploaded, but no data could be extracted. Please fill the form manually.');
      }
      
    } catch (err) {
      console.error('Resume parsing error:', err);
      setError(err.message || 'Failed to parse resume. Please try again or fill the form manually.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError('Please fill in all required fields (Name, Email, Phone)');
      setSuccess('');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setSuccess('');
      return;
    }

    setSuccess('✅ Application submitted successfully! 🎉');
    setError('');
    
    // Log the submitted data (in production, send to backend)
    console.log('Submitted Application:', formData);
    
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSuccess(''), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Smart Job Application</h1>
          <p className="text-gray-600">Upload your resume and let us auto-fill your application</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          {/* Resume Upload Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Your Resume</h2>
            <ResumeUpload onFileUpload={handleFileUpload} isLoading={isLoading} />
          </div>

          {/* Status Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-green-700 text-sm">{success}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
              <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
              <p className="text-blue-700 text-sm">Parsing your resume... This may take a moment.</p>
            </div>
          )}

          {/* Application Form */}
          <div className="border-t pt-8">
            <JobApplicationForm 
              formData={formData}
              setFormData={setFormData}
              autoFilledFields={autoFilledFields}
              onSubmit={handleSubmit}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          <p>Your data is processed securely and never shared with third parties</p>
        </div>
      </div>
    </div>
  );
};

export default App;
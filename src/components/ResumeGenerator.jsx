import React, { useState } from 'react';
import { Download, Eye, Edit3, Plus, Trash2 } from 'lucide-react';

const ResumeGenerator = () => {
  const [activeTemplate, setActiveTemplate] = useState('modern');
  const [showPreview, setShowPreview] = useState(true);
  
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    website: 'johndoe.dev',
    summary: 'Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Proficient in React, Node.js, and cloud technologies.',
    experience: [
      {
        company: 'Tech Corp',
        position: 'Senior Developer',
        duration: '2021 - Present',
        description: 'Led development of microservices architecture serving 1M+ users. Improved application performance by 40%.'
      },
      {
        company: 'StartUp Inc',
        position: 'Full Stack Developer',
        duration: '2019 - 2021',
        description: 'Built and maintained RESTful APIs and responsive web applications using React and Node.js.'
      }
    ],
    education: [
      {
        school: 'University of Technology',
        degree: 'Bachelor of Science in Computer Science',
        duration: '2015 - 2019',
        gpa: '3.8/4.0'
      }
    ],
    projects: [
      {
        name: 'E-Commerce Platform',
        tech: 'React, Node.js, MongoDB',
        description: 'Built a full-stack e-commerce platform with payment integration and real-time inventory management.'
      },
      {
        name: 'Task Management App',
        tech: 'React Native, Firebase',
        description: 'Developed a cross-platform mobile app for task management with offline support.'
      }
    ],
    achievements: [
      'Reduced server costs by 35% through optimization',
      'Led team of 5 developers on critical project delivery',
      'Increased user engagement by 50% through UX improvements'
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2023'
      },
      {
        name: 'Google Cloud Professional',
        issuer: 'Google Cloud',
        year: '2022'
      }
    ],
    techHighlights: ['React & Redux', 'Node.js & Express', 'AWS & Docker', 'MongoDB & PostgreSQL'],
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'Spanish', proficiency: 'Professional' },
      { name: 'Mandarin', proficiency: 'Intermediate' }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL']
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleSimpleArrayChange = (section, index, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => i === index ? value : item)
    }));
  };

  const addItem = (section) => {
    const templates = {
      experience: { company: '', position: '', duration: '', description: '' },
      education: { school: '', degree: '', duration: '', gpa: '' },
      projects: { name: '', tech: '', description: '' },
      certifications: { name: '', issuer: '', year: '' },
      languages: { name: '', proficiency: '' },
      achievements: '',
      techHighlights: ''
    };
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], templates[section]]
    }));
  };

  const removeItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const handleSkillsChange = (value) => {
    setFormData(prev => ({
      ...prev,
      skills: value.split(',').map(s => s.trim()).filter(Boolean)
    }));
  };

  const ModernTemplate = () => (
    <div className="bg-white p-8 shadow-lg h-full">
      <div className="border-l-4 border-blue-600 pl-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{formData.fullName}</h1>
        <p className="text-xl text-blue-600 font-medium">{formData.title}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-6 text-sm text-gray-600">
        <div>{formData.email}</div>
        <div>{formData.phone}</div>
        <div>{formData.location}</div>
        <div className="col-span-3">{formData.linkedin} | {formData.website}</div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2 border-b-2 border-blue-600 pb-1">SUMMARY</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{formData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2 border-b-2 border-blue-600 pb-1">TECH HIGHLIGHTS</h2>
        <div className="flex flex-wrap gap-2">
          {formData.techHighlights.map((tech, i) => (
            <span key={i} className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">EXPERIENCE</h2>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-900">{exp.position}</h3>
              <span className="text-sm text-gray-600">{exp.duration}</span>
            </div>
            <p className="text-sm text-blue-600 mb-2">{exp.company}</p>
            <p className="text-sm text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">PROJECTS</h2>
        {formData.projects.map((proj, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-bold text-gray-900">{proj.name}</h3>
            <p className="text-sm text-blue-600 mb-1">{proj.tech}</p>
            <p className="text-sm text-gray-700">{proj.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">KEY ACHIEVEMENTS</h2>
        <ul className="space-y-1">
          {formData.achievements.map((ach, i) => (
            <li key={i} className="text-sm text-gray-700 flex items-start">
              <span className="text-blue-600 mr-2">▸</span>
              {ach}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">EDUCATION</h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
              <p className="text-sm text-gray-700">{edu.school}</p>
              <p className="text-sm text-gray-600">{edu.duration} • GPA: {edu.gpa}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">CERTIFICATIONS</h2>
          {formData.certifications.map((cert, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold text-sm text-gray-900">{cert.name}</h3>
              <p className="text-sm text-gray-700">{cert.issuer} • {cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">LANGUAGES</h2>
          {formData.languages.map((lang, i) => (
            <div key={i} className="flex justify-between text-sm mb-1">
              <span className="text-gray-900">{lang.name}</span>
              <span className="text-gray-600">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ClassicTemplate = () => (
    <div className="bg-white p-8 shadow-lg h-full">
      <div className="text-center mb-6 border-b-2 border-gray-800 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{formData.fullName}</h1>
        <p className="text-lg text-gray-700 mb-2">{formData.title}</p>
        <p className="text-sm text-gray-600">
          {formData.email} • {formData.phone} • {formData.location}
        </p>
      </div>

      <div className="mb-5">
        <h2 className="text-base font-bold text-gray-900 mb-2 uppercase">Professional Summary</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{formData.summary}</p>
      </div>

      <div className="mb-5">
        <h2 className="text-base font-bold text-gray-900 mb-2 uppercase">Core Competencies</h2>
        <p className="text-sm text-gray-700">{formData.techHighlights.join(' • ')}</p>
      </div>

      <div className="mb-5">
        <h2 className="text-base font-bold text-gray-900 mb-3 uppercase">Work Experience</h2>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-gray-900">{exp.position} - {exp.company}</h3>
              <span className="text-xs text-gray-600 italic">{exp.duration}</span>
            </div>
            <p className="text-sm text-gray-700 ml-4">• {exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h2 className="text-base font-bold text-gray-900 mb-2 uppercase">Key Projects</h2>
        {formData.projects.map((proj, i) => (
          <div key={i} className="mb-2">
            <h3 className="font-bold text-sm text-gray-900">{proj.name} ({proj.tech})</h3>
            <p className="text-sm text-gray-700 ml-4">• {proj.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h2 className="text-base font-bold text-gray-900 mb-2 uppercase">Notable Achievements</h2>
        {formData.achievements.map((ach, i) => (
          <p key={i} className="text-sm text-gray-700 ml-4 mb-1">• {ach}</p>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-5">
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase">Education</h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
              <p className="text-xs text-gray-700">{edu.school} • {edu.duration}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase">Certifications</h2>
          {formData.certifications.map((cert, i) => (
            <div key={i} className="mb-2">
              <p className="text-sm text-gray-900">{cert.name}</p>
              <p className="text-xs text-gray-600">{cert.issuer} ({cert.year})</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase">Technical Skills</h2>
          <p className="text-sm text-gray-700">{formData.skills.join(' • ')}</p>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase">Languages</h2>
          {formData.languages.map((lang, i) => (
            <p key={i} className="text-sm text-gray-700">{lang.name} - {lang.proficiency}</p>
          ))}
        </div>
      </div>
    </div>
  );

  const MinimalTemplate = () => (
    <div className="bg-white p-8 shadow-lg h-full">
      <div className="mb-8">
        <h1 className="text-5xl font-light text-gray-900 mb-2">{formData.fullName}</h1>
        <p className="text-xl text-gray-600">{formData.title}</p>
        <div className="flex gap-4 mt-3 text-sm text-gray-500">
          <span>{formData.email}</span>
          <span>•</span>
          <span>{formData.phone}</span>
          <span>•</span>
          <span>{formData.location}</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.summary}</p>
        </div>

        <div>
          <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-3 uppercase">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {formData.techHighlights.map((tech, i) => (
              <span key={i} className="text-sm text-gray-700 border border-gray-300 px-2 py-1 rounded">{tech}</span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-3 uppercase">Experience</h2>
          <div className="space-y-3">
            {formData.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-xs text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-3 uppercase">Projects</h2>
          <div className="space-y-2">
            {formData.projects.map((proj, i) => (
              <div key={i}>
                <h3 className="font-semibold text-sm text-gray-900">{proj.name}</h3>
                <p className="text-xs text-gray-600 mb-1">{proj.tech}</p>
                <p className="text-sm text-gray-700">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-2 uppercase">Impact</h2>
          <div className="space-y-1">
            {formData.achievements.map((ach, i) => (
              <p key={i} className="text-sm text-gray-700">• {ach}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-2 uppercase">Education</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className="mb-2">
                <h3 className="font-semibold text-sm text-gray-900">{edu.degree}</h3>
                <p className="text-xs text-gray-600">{edu.school}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-2 uppercase">Certifications</h2>
            {formData.certifications.map((cert, i) => (
              <p key={i} className="text-xs text-gray-700 mb-1">{cert.name}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-2 uppercase">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, i) => (
                <span key={i} className="text-xs text-gray-700">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-2 uppercase">Languages</h2>
            {formData.languages.map((lang, i) => (
              <p key={i} className="text-xs text-gray-700">{lang.name} ({lang.proficiency})</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CreativeTemplate = () => (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 shadow-lg h-full">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-6">
        <h1 className="text-4xl font-bold mb-2">{formData.fullName}</h1>
        <p className="text-xl opacity-90">{formData.title}</p>
        <div className="mt-3 text-sm space-y-1 opacity-90">
          <div>{formData.email} | {formData.phone}</div>
          <div>{formData.location}</div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 mb-4 shadow">
        <h2 className="text-base font-bold text-purple-600 mb-2 flex items-center gap-2">
          <div className="w-6 h-1 bg-purple-600 rounded"></div>
          ABOUT ME
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{formData.summary}</p>
      </div>

      <div className="bg-white rounded-lg p-5 mb-4 shadow">
        <h2 className="text-base font-bold text-purple-600 mb-2 flex items-center gap-2">
          <div className="w-6 h-1 bg-purple-600 rounded"></div>
          TECH STACK
        </h2>
        <div className="flex flex-wrap gap-2">
          {formData.techHighlights.map((tech, i) => (
            <span key={i} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 mb-4 shadow">
        <h2 className="text-base font-bold text-purple-600 mb-3 flex items-center gap-2">
          <div className="w-6 h-1 bg-purple-600 rounded"></div>
          EXPERIENCE
        </h2>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-3 last:mb-0">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-sm text-gray-900">{exp.position}</h3>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{exp.duration}</span>
            </div>
            <p className="text-xs text-purple-600 font-medium mb-1">{exp.company}</p>
            <p className="text-sm text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-5 mb-4 shadow">
        <h2 className="text-base font-bold text-purple-600 mb-3 flex items-center gap-2">
          <div className="w-6 h-1 bg-purple-600 rounded"></div>
          PROJECTS
        </h2>
        {formData.projects.map((proj, i) => (
          <div key={i} className="mb-3 last:mb-0">
            <h3 className="font-bold text-sm text-gray-900">{proj.name}</h3>
            <p className="text-xs text-purple-600 mb-1">{proj.tech}</p>
            <p className="text-sm text-gray-700">{proj.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-5 mb-4 shadow">
        <h2 className="text-base font-bold text-purple-600 mb-2 flex items-center gap-2">
          <div className="w-6 h-1 bg-purple-600 rounded"></div>
          KEY ACHIEVEMENTS
        </h2>
        {formData.achievements.map((ach, i) => (
          <p key={i} className="text-sm text-gray-700 mb-1 flex items-start">
            <span className="text-purple-600 mr-2">✓</span>
            {ach}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg p-5 shadow">
          <h2 className="text-base font-bold text-purple-600 mb-2 flex items-center gap-2">
            <div className="w-6 h-1 bg-purple-600 rounded"></div>
            EDUCATION
          </h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-2 last:mb-0">
              <h3 className="font-bold text-xs text-gray-900">{edu.degree}</h3>
              <p className="text-xs text-gray-600">{edu.school}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-5 shadow">
          <h2 className="text-base font-bold text-purple-600 mb-2 flex items-center gap-2">
            <div className="w-6 h-1 bg-purple-600 rounded"></div>
            CERTIFICATIONS
          </h2>
          {formData.certifications.map((cert, i) => (
            <div key={i} className="mb-2 last:mb-0">
              <p className="text-xs font-semibold text-gray-900">{cert.name}</p>
              <p className="text-xs text-gray-600">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-5 shadow">
          <h2 className="text-base font-bold text-purple-600 mb-2 flex items-center gap-2">
            <div className="w-6 h-1 bg-purple-600 rounded"></div>
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-1">
            {formData.skills.map((skill, i) => (
              <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow">
          <h2 className="text-base font-bold text-purple-600 mb-2 flex items-center gap-2">
            <div className="w-6 h-1 bg-purple-600 rounded"></div>
            LANGUAGES
          </h2>
          {formData.languages.map((lang, i) => (
            <div key={i} className="flex justify-between text-xs mb-1">
              <span className="text-gray-900">{lang.name}</span>
              <span className="text-gray-600">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TwoColumnTemplate = () => (
    <div className="bg-white shadow-lg h-full flex">
      <div className="w-1/3 bg-gray-800 text-white p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{formData.fullName}</h1>
          <p className="text-sm text-gray-300">{formData.title}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold mb-3 border-b border-gray-600 pb-2">CONTACT</h2>
          <div className="space-y-2 text-xs">
            <p>{formData.email}</p>
            <p>{formData.phone}</p>
            <p>{formData.location}</p>
            <p>{formData.linkedin}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold mb-3 border-b border-gray-600 pb-2">TECH STACK</h2>
          <div className="space-y-2">
            {formData.techHighlights.map((tech, i) => (
              <div key={i} className="bg-gray-700 px-2 py-1 rounded text-xs">{tech}</div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold mb-3 border-b border-gray-600 pb-2">SKILLS</h2>
          <div className="flex flex-wrap gap-1">
            {formData.skills.map((skill, i) => (
              <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded">{skill}</span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold mb-3 border-b border-gray-600 pb-2">LANGUAGES</h2>
          {formData.languages.map((lang, i) => (
            <div key={i} className="mb-2">
              <div className="text-xs mb-1">{lang.name}</div>
              <div className="bg-gray-700 h-1 rounded overflow-hidden">
                <div 
                  className="bg-blue-400 h-full" 
                  style={{ width: lang.proficiency === 'Native' ? '100%' : lang.proficiency === 'Professional' ? '80%' : '60%' }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">{lang.proficiency}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-bold mb-3 border-b border-gray-600 pb-2">CERTIFICATIONS</h2>
          {formData.certifications.map((cert, i) => (
            <div key={i} className="mb-3">
              <p className="text-xs font-semibold">{cert.name}</p>
              <p className="text-xs text-gray-400">{cert.issuer} • {cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-2/3 p-6">
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-800 pb-1">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.summary}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-3 border-b-2 border-gray-800 pb-1">WORK EXPERIENCE</h2>
          {formData.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">{exp.position}</h3>
                <span className="text-xs text-gray-600">{exp.duration}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-3 border-b-2 border-gray-800 pb-1">KEY PROJECTS</h2>
          {formData.projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold text-sm text-gray-900">{proj.name}</h3>
              <p className="text-xs text-gray-600 mb-1">{proj.tech}</p>
              <p className="text-sm text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 border-b-2 border-gray-800 pb-1">ACHIEVEMENTS & IMPACT</h2>
          {formData.achievements.map((ach, i) => (
            <p key={i} className="text-sm text-gray-700 mb-1 flex items-start">
              <span className="text-gray-800 mr-2">▸</span>
              {ach}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3 border-b-2 border-gray-800 pb-1">EDUCATION</h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
              <p className="text-sm text-gray-700">{edu.school} • {edu.duration} • GPA: {edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExecutiveTemplate = () => (
    <div className="bg-white p-8 shadow-lg h-full">
      <div className="text-center mb-6 pb-4 border-b-4 border-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-wide">{formData.fullName}</h1>
        <p className="text-base text-gray-700 mb-2 tracking-wide">{formData.title}</p>
        <p className="text-xs text-gray-600">
          {formData.email} | {formData.phone} | {formData.location} | {formData.linkedin}
        </p>
      </div>

      <div className="mb-5 bg-gray-50 p-4 border-l-4 border-gray-900">
        <h2 className="text-sm font-bold text-gray-900 mb-2 tracking-wider">EXECUTIVE SUMMARY</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{formData.summary}</p>
      </div>

      <div className="mb-5">
        <h2 className="text-sm font-bold text-gray-900 mb-3 tracking-wider border-b-2 border-gray-300 pb-1">CORE COMPETENCIES</h2>
        <div className="grid grid-cols-4 gap-2">
          {formData.techHighlights.map((tech, i) => (
            <div key={i} className="text-center border border-gray-300 py-2 text-xs font-medium">
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-sm font-bold text-gray-900 mb-3 tracking-wider border-b-2 border-gray-300 pb-1">PROFESSIONAL EXPERIENCE</h2>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-4 border-l-2 border-gray-300 pl-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-sm text-gray-900">{exp.position}</h3>
              <span className="text-xs text-gray-600 font-semibold">{exp.duration}</span>
            </div>
            <p className="text-sm text-gray-700 font-medium mb-2">{exp.company}</p>
            <p className="text-sm text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h2 className="text-sm font-bold text-gray-900 mb-3 tracking-wider border-b-2 border-gray-300 pb-1">KEY ACHIEVEMENTS</h2>
        <div className="grid grid-cols-1 gap-2">
          {formData.achievements.map((ach, i) => (
            <div key={i} className="bg-gray-50 p-3 text-sm text-gray-700">
              {ach}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-sm font-bold text-gray-900 mb-3 tracking-wider border-b-2 border-gray-300 pb-1">SIGNATURE PROJECTS</h2>
        {formData.projects.map((proj, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-bold text-sm text-gray-900">{proj.name}</h3>
            <p className="text-xs text-gray-600 mb-1">Technology: {proj.tech}</p>
            <p className="text-sm text-gray-700">{proj.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-2 tracking-wider">EDUCATION</h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-bold text-xs text-gray-900">{edu.degree}</p>
              <p className="text-xs text-gray-600">{edu.school}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-2 tracking-wider">CERTIFICATIONS</h2>
          {formData.certifications.map((cert, i) => (
            <p key={i} className="text-xs text-gray-700 mb-1">{cert.name}</p>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-2 tracking-wider">LANGUAGES</h2>
          {formData.languages.map((lang, i) => (
            <p key={i} className="text-xs text-gray-700">{lang.name} - {lang.proficiency}</p>
          ))}
        </div>
      </div>
    </div>
  );

  const TechTemplate = () => (
    <div className="bg-gray-900 text-white p-8 shadow-lg h-full">
      <div className="mb-6">
        <h1 className="text-4xl font-mono font-bold mb-2 text-green-400">&gt; {formData.fullName}</h1>
        <p className="text-lg font-mono text-blue-400">$ {formData.title}</p>
        <div className="mt-3 space-y-1 text-sm font-mono text-gray-400">
          <p>└─ 📧 {formData.email}</p>
          <p>└─ 📱 {formData.phone}</p>
          <p>└─ 📍 {formData.location}</p>
        </div>
      </div>

      <div className="mb-6 border-l-4 border-green-400 pl-4">
        <h2 className="text-sm font-mono font-bold mb-2 text-green-400">// ABOUT</h2>
        <p className="text-sm text-gray-300 leading-relaxed">{formData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-mono font-bold mb-3 text-green-400">// TECH_STACK</h2>
        <div className="flex flex-wrap gap-2">
          {formData.techHighlights.map((tech, i) => (
            <span key={i} className="bg-green-900 text-green-300 px-3 py-1 rounded font-mono text-xs border border-green-700">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-mono font-bold mb-3 text-green-400">// EXPERIENCE</h2>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-4 bg-gray-800 p-3 rounded border border-gray-700">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-mono text-sm font-bold text-blue-400">{exp.position}</h3>
              <span className="text-xs font-mono text-gray-500">{exp.duration}</span>
            </div>
            <p className="text-sm font-mono text-purple-400 mb-2">@ {exp.company}</p>
            <p className="text-sm text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-mono font-bold mb-3 text-green-400">// PROJECTS</h2>
        {formData.projects.map((proj, i) => (
          <div key={i} className="mb-3 border-l-2 border-blue-500 pl-3">
            <h3 className="font-mono text-sm font-bold text-white">{proj.name}</h3>
            <p className="text-xs font-mono text-yellow-400 mb-1">[{proj.tech}]</p>
            <p className="text-sm text-gray-300">{proj.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-mono font-bold mb-2 text-green-400">// ACHIEVEMENTS</h2>
        {formData.achievements.map((ach, i) => (
          <p key={i} className="text-sm text-gray-300 mb-1 font-mono">
            <span className="text-green-400">[✓]</span> {ach}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-sm font-mono font-bold mb-2 text-green-400">// EDUCATION</h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="text-xs font-mono text-white">{edu.degree}</p>
              <p className="text-xs font-mono text-gray-400">{edu.school}</p>
            </div>
          ))}

          <h2 className="text-sm font-mono font-bold mb-2 mt-4 text-green-400">// CERTIFICATIONS</h2>
          {formData.certifications.map((cert, i) => (
            <p key={i} className="text-xs font-mono text-gray-300 mb-1">{cert.name}</p>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-mono font-bold mb-2 text-green-400">// SKILLS</h2>
          <div className="flex flex-wrap gap-1 mb-4">
            {formData.skills.map((skill, i) => (
              <span key={i} className="text-xs font-mono bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">
                {skill}
              </span>
            ))}
          </div>

          <h2 className="text-sm font-mono font-bold mb-2 text-green-400">// LANGUAGES</h2>
          {formData.languages.map((lang, i) => (
            <p key={i} className="text-xs font-mono text-gray-300 mb-1">
              {lang.name}: {lang.proficiency}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  const templates = {
    modern: <ModernTemplate />,
    classic: <ClassicTemplate />,
    minimal: <MinimalTemplate />,
    creative: <CreativeTemplate />,
    twocolumn: <TwoColumnTemplate />,
    executive: <ExecutiveTemplate />,
    tech: <TechTemplate />
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Resume Generator</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
              >
                {showPreview ? <Edit3 size={18} /> : <Eye size={18} />}
                {showPreview ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {!showPreview && (
            <div className="lg:col-span-1 print:hidden">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Resume Details</h2>
                
                <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tech Highlights (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.techHighlights.join(', ')}
                      onChange={(e) => setFormData(prev => ({...prev, techHighlights: e.target.value.split(',').map(s => s.trim()).filter(Boolean)}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Skills (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.skills.join(', ')}
                      onChange={(e) => handleSkillsChange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">Experience</label>
                      <button
                        onClick={() => addItem('experience')}
                        className="flex items-center gap-1 text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        <Plus size={14} /> Add
                      </button>
                    </div>
                    {formData.experience.map((exp, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-3 mb-2 space-y-2">
                        <input
                          type="text"
                          placeholder="Position"
                          value={exp.position}
                          onChange={(e) => handleArrayChange('experience', i, 'position', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Company"
                          value={exp.company}
                          onChange={(e) => handleArrayChange('experience', i, 'company', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Duration (e.g., 2021 - Present)"
                          value={exp.duration}
                          onChange={(e) => handleArrayChange('experience', i, 'duration', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <textarea
                          placeholder="Description"
                          value={exp.description}
                          onChange={(e) => handleArrayChange('experience', i, 'description', e.target.value)}
                          rows="2"
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => removeItem('experience', i)}
                          className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">Projects</label>
                      <button
                        onClick={() => addItem('projects')}
                        className="flex items-center gap-1 text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        <Plus size={14} /> Add
                      </button>
                    </div>
                    {formData.projects.map((proj, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-3 mb-2 space-y-2">
                        <input
                          type="text"
                          placeholder="Project Name"
                          value={proj.name}
                          onChange={(e) => handleArrayChange('projects', i, 'name', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Technologies Used"
                          value={proj.tech}
                          onChange={(e) => handleArrayChange('projects', i, 'tech', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <textarea
                          placeholder="Description"
                          value={proj.description}
                          onChange={(e) => handleArrayChange('projects', i, 'description', e.target.value)}
                          rows="2"
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => removeItem('projects', i)}
                          className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">Achievements</label>
                      <button
                        onClick={() => addItem('achievements')}
                        className="flex items-center gap-1 text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        <Plus size={14} /> Add
                      </button>
                    </div>
                    {formData.achievements.map((ach, i) => (
                      <div key={i} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Achievement"
                          value={ach}
                          onChange={(e) => handleSimpleArrayChange('achievements', i, e.target.value)}
                          className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => removeItem('achievements', i)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">Education</label>
                      <button
                        onClick={() => addItem('education')}
                        className="flex items-center gap-1 text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        <Plus size={14} /> Add
                      </button>
                    </div>
                    {formData.education.map((edu, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-3 mb-2 space-y-2">
                        <input
                          type="text"
                          placeholder="Degree"
                          value={edu.degree}
                          onChange={(e) => handleArrayChange('education', i, 'degree', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="School/University"
                          value={edu.school}
                          onChange={(e) => handleArrayChange('education', i, 'school', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Duration"
                          value={edu.duration}
                          onChange={(e) => handleArrayChange('education', i, 'duration', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="GPA"
                          value={edu.gpa}
                          onChange={(e) => handleArrayChange('education', i, 'gpa', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => removeItem('education', i)}
                          className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">Certifications</label>
                      <button
                        onClick={() => addItem('certifications')}
                        className="flex items-center gap-1 text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        <Plus size={14} /> Add
                      </button>
                    </div>
                    {formData.certifications.map((cert, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-3 mb-2 space-y-2">
                        <input
                          type="text"
                          placeholder="Certification Name"
                          value={cert.name}
                          onChange={(e) => handleArrayChange('certifications', i, 'name', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Issuer"
                          value={cert.issuer}
                          onChange={(e) => handleArrayChange('certifications', i, 'issuer', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Year"
                          value={cert.year}
                          onChange={(e) => handleArrayChange('certifications', i, 'year', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => removeItem('certifications', i)}
                          className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">Languages</label>
                      <button
                        onClick={() => addItem('languages')}
                        className="flex items-center gap-1 text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        <Plus size={14} /> Add
                      </button>
                    </div>
                    {formData.languages.map((lang, i) => (
                      <div key={i} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Language"
                          value={lang.name}
                          onChange={(e) => handleArrayChange('languages', i, 'name', e.target.value)}
                          className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Proficiency"
                          value={lang.proficiency}
                          onChange={(e) => handleArrayChange('languages', i, 'proficiency', e.target.value)}
                          className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => removeItem('languages', i)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={showPreview ? 'lg:col-span-3' : 'lg:col-span-2'}>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:hidden">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Template</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {[
                  { id: 'modern', name: 'Modern' },
                  { id: 'classic', name: 'Classic' },
                  { id: 'minimal', name: 'Minimal' },
                  { id: 'creative', name: 'Creative' },
                  { id: 'twocolumn', name: 'Two Column' },
                  { id: 'executive', name: 'Executive' },
                  { id: 'tech', name: 'Tech' }
                ].map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setActiveTemplate(template.id)}
                    className={`p-3 rounded-lg border-2 transition ${
                      activeTemplate === template.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-sm text-gray-900">{template.name}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden print:shadow-none" id="resume-preview">
              <div className="aspect-[8.5/11] overflow-auto">
                {templates[activeTemplate]}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-preview, #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeGenerator;
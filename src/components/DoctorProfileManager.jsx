import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, Award, Star, Download, Plus, Edit, Trash2, GraduationCap, Briefcase, Users } from 'lucide-react';

export default function DoctorProfileManager() {
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialty: "Cardiologist",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
            experience: "15 years",
            rating: 4.8,
            reviews: 245,
            education: "MD from Harvard Medical School",
            location: "New York, NY",
            phone: "+1 (555) 123-4567",
            email: "sarah.johnson@hospital.com",
            about: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and has helped thousands of patients maintain healthy hearts.",
            specializations: ["Preventive Cardiology", "Heart Disease", "Hypertension", "Cholesterol Management"],
            availability: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 10:00 AM - 2:00 PM"],
            consultationFee: "$150"
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            specialty: "Orthopedic Surgeon",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
            experience: "12 years",
            rating: 4.9,
            reviews: 189,
            education: "MD from Johns Hopkins University",
            location: "Los Angeles, CA",
            phone: "+1 (555) 234-5678",
            email: "michael.chen@hospital.com",
            about: "Dr. Michael Chen is a renowned orthopedic surgeon specializing in sports injuries and joint replacement. He has performed over 2,000 successful surgeries and is known for his patient-centered approach.",
            specializations: ["Sports Medicine", "Joint Replacement", "Arthroscopy", "Trauma Surgery"],
            availability: ["Mon-Thu: 8:00 AM - 6:00 PM", "Fri: 8:00 AM - 4:00 PM"],
            consultationFee: "$200"
        },
        {
            id: 3,
            name: "Dr. Emily Rodriguez",
            specialty: "Pediatrician",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
            experience: "10 years",
            rating: 4.9,
            reviews: 320,
            education: "MD from Stanford University",
            location: "Chicago, IL",
            phone: "+1 (555) 345-6789",
            email: "emily.rodriguez@hospital.com",
            about: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. She focuses on preventive care and child development.",
            specializations: ["Child Development", "Vaccinations", "Pediatric Care", "Adolescent Medicine"],
            availability: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
            consultationFee: "$120"
        }
    ]);

    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        image: "",
        experience: "",
        rating: "",
        reviews: "",
        education: "",
        location: "",
        phone: "",
        email: "",
        about: "",
        specializations: "",
        availability: "",
        consultationFee: ""
    });

    const exportDoctorProfile = (doctor) => {
        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${doctor.name} - ${doctor.specialty}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="min-h-screen">
        <!-- Header -->
        <header class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <h1 class="text-2xl font-bold text-blue-600">MediCare Hospital</h1>
            </div>
        </header>

        <!-- Doctor Profile -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <!-- Hero Section -->
                <div class="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12">
                    <div class="flex flex-col md:flex-row items-center gap-8">
                        <img src="${doctor.image}" alt="${doctor.name}" class="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover">
                        <div class="text-white text-center md:text-left">
                            <h2 class="text-4xl font-bold mb-2">${doctor.name}</h2>
                            <p class="text-xl text-blue-100 mb-4">${doctor.specialty}</p>
                            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                    <span class="font-semibold">${doctor.rating}/5</span>
                                    <span class="text-blue-100">(${doctor.reviews} reviews)</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    <span>${doctor.experience} Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="grid md:grid-cols-3 gap-8 p-8">
                    <!-- Main Info -->
                    <div class="md:col-span-2 space-y-6">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-4">About ${doctor.name.split(' ')[1]}</h3>
                            <p class="text-gray-600 leading-relaxed">${doctor.about}</p>
                        </div>

                        <div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                                Specializations
                            </h3>
                            <div class="flex flex-wrap gap-2">
                                ${doctor.specializations.map(spec => `<span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">${spec}</span>`).join('')}
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                                Education
                            </h3>
                            <p class="text-gray-600">${doctor.education}</p>
                        </div>
                    </div>

                    <!-- Sidebar -->
                    <div class="space-y-6">
                        <!-- Appointment Card -->
                        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Book Appointment</h3>
                            <div class="space-y-4">
                                <div class="flex items-center gap-3 text-gray-700">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    <span class="font-semibold">${doctor.consultationFee}</span>
                                </div>
                                <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                    Schedule Appointment
                                </button>
                            </div>
                        </div>

                        <!-- Contact Info -->
                        <div class="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 class="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                            <div class="space-y-3">
                                <div class="flex items-start gap-3 text-gray-600">
                                    <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                    <span>${doctor.phone}</span>
                                </div>
                                <div class="flex items-start gap-3 text-gray-600">
                                    <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    <span class="break-all">${doctor.email}</span>
                                </div>
                                <div class="flex items-start gap-3 text-gray-600">
                                    <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    <span>${doctor.location}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Availability -->
                        <div class="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 class="text-lg font-bold text-gray-900 mb-4">Availability</h3>
                            <div class="space-y-2">
                                ${doctor.availability.map(time => `<p class="text-gray-600 flex items-center gap-2"><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>${time}</p>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-8 mt-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>&copy; 2025 MediCare Hospital. All rights reserved.</p>
            </div>
        </footer>
    </div>
</body>
</html>`;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${doctor.name.replace(/\s+/g, '-')}-profile.html`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddDoctor = () => {
        if (!formData.name || !formData.specialty) {
            alert('Please fill in at least name and specialty');
            return;
        }

        const newDoctor = {
            id: Date.now(),
            name: formData.name,
            specialty: formData.specialty,
            image: formData.image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
            experience: formData.experience || "N/A",
            rating: parseFloat(formData.rating) || 4.5,
            reviews: parseInt(formData.reviews) || 0,
            education: formData.education || "Medical Degree",
            location: formData.location || "Location not specified",
            phone: formData.phone || "+1 (555) 000-0000",
            email: formData.email || "doctor@hospital.com",
            about: formData.about || "Experienced medical professional dedicated to patient care.",
            specializations: formData.specializations.split(',').map(s => s.trim()).filter(s => s) || ["General Practice"],
            availability: formData.availability.split(',').map(s => s.trim()).filter(s => s) || ["Mon-Fri: 9:00 AM - 5:00 PM"],
            consultationFee: formData.consultationFee || "$100"
        };

        setDoctors([...doctors, newDoctor]);
        setFormData({
            name: "", specialty: "", image: "", experience: "", rating: "", reviews: "",
            education: "", location: "", phone: "", email: "", about: "",
            specializations: "", availability: "", consultationFee: ""
        });
        setShowAddForm(false);
    };

    const handleDeleteDoctor = (id) => {
        if (window.confirm('Are you sure you want to delete this doctor?')) {
            setDoctors(doctors.filter(doc => doc.id !== id));
            if (selectedDoctor?.id === id) setSelectedDoctor(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold">Doctor Profile Manager</h1>
                    <p className="text-blue-100 mt-2">Manage and export individual doctor profiles</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Add Doctor Button */}
                <div className="mb-6">
                    <button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-semibold"
                    >
                        <Plus size={20} />
                        Add New Doctor
                    </button>
                </div>

                {/* Add Doctor Form */}
                {showAddForm && (
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-6">Add New Doctor</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name *" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="specialty" value={formData.specialty} onChange={handleInputChange} placeholder="Specialty *" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="image" value={formData.image} onChange={handleInputChange} placeholder="Image URL" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Experience (e.g., 10 years)" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="rating" value={formData.rating} onChange={handleInputChange} placeholder="Rating (0-5)" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="reviews" value={formData.reviews} onChange={handleInputChange} placeholder="Number of Reviews" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="education" value={formData.education} onChange={handleInputChange} placeholder="Education" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="consultationFee" value={formData.consultationFee} onChange={handleInputChange} placeholder="Consultation Fee (e.g., $150)" className="border rounded-lg px-4 py-2" />
                            <input type="text" name="specializations" value={formData.specializations} onChange={handleInputChange} placeholder="Specializations (comma-separated)" className="border rounded-lg px-4 py-2 md:col-span-2" />
                            <input type="text" name="availability" value={formData.availability} onChange={handleInputChange} placeholder="Availability (comma-separated)" className="border rounded-lg px-4 py-2 md:col-span-2" />
                            <textarea name="about" value={formData.about} onChange={handleInputChange} placeholder="About the doctor" className="border rounded-lg px-4 py-2 md:col-span-2" rows="3"></textarea>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button onClick={handleAddDoctor} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Add Doctor</button>
                            <button onClick={() => setShowAddForm(false)} className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400">Cancel</button>
                        </div>
                    </div>
                )}

                {/* Doctors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {doctors.map(doctor => (
                        <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="relative">
                                <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {doctor.specialty}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>

                                <div className="flex items-center gap-2 mb-3">
                                    <Star className="text-yellow-400 fill-current" size={18} />
                                    <span className="font-semibold">{doctor.rating}</span>
                                    <span className="text-gray-500 text-sm">({doctor.reviews} reviews)</span>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Briefcase size={16} />
                                        <span>{doctor.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <MapPin size={16} />
                                        <span>{doctor.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Phone size={16} />
                                        <span>{doctor.phone}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => exportDoctorProfile(doctor)}
                                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Download size={16} />
                                        Export
                                    </button>
                                    <button
                                        onClick={() => setSelectedDoctor(doctor)}
                                        className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Preview
                                    </button>
                                    <button
                                        onClick={() => handleDeleteDoctor(doctor.id)}
                                        className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Preview Modal */}
                {selectedDoctor && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedDoctor(null)}>
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                                <h2 className="text-2xl font-bold">Profile Preview</h2>
                                <button onClick={() => setSelectedDoctor(null)} className="text-gray-500 hover:text-gray-700">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white mb-6">
                                    <div className="flex flex-col md:flex-row items-center gap-6">
                                        <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-32 h-32 rounded-full border-4 border-white object-cover" />
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2">{selectedDoctor.name}</h3>
                                            <p className="text-xl text-blue-100">{selectedDoctor.specialty}</p>
                                            <div className="flex items-center gap-4 mt-4">
                                                <div className="flex items-center gap-2">
                                                    <Star className="fill-current" size={20} />
                                                    <span>{selectedDoctor.rating}/5 ({selectedDoctor.reviews} reviews)</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Briefcase size={20} />
                                                    <span>{selectedDoctor.experience}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2 space-y-6">
                                        <div>
                                            <h4 className="text-xl font-bold mb-3">About</h4>
                                            <p className="text-gray-600">{selectedDoctor.about}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-bold mb-3">Specializations</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedDoctor.specializations.map((spec, idx) => (
                                                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{spec}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-bold mb-3">Education</h4>
                                            <p className="text-gray-600">{selectedDoctor.education}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}            
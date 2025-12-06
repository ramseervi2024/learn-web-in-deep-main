import React, { useState, useEffect } from 'react';
import { Users, Calendar, DollarSign, BookOpen, TrendingUp, Clock, UserPlus, Search, Filter, Download, Edit, Trash2, Check, X, Bell, Settings } from 'lucide-react';

const CoachingManagementApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [students, setStudents] = useState([
    { id: 1, name: 'Rajesh Kumar', class: 'JEE Advanced', phone: '9876543210', email: 'rajesh@email.com', fees: 25000, paid: 25000, status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Priya Sharma', class: 'NEET', phone: '9876543211', email: 'priya@email.com', fees: 22000, paid: 15000, status: 'active', joinDate: '2024-02-01' },
    { id: 3, name: 'Amit Patel', class: 'JEE Mains', phone: '9876543212', email: 'amit@email.com', fees: 20000, paid: 20000, status: 'active', joinDate: '2024-01-20' },
    { id: 4, name: 'Sneha Reddy', class: 'NEET', phone: '9876543213', email: 'sneha@email.com', fees: 22000, paid: 10000, status: 'pending', joinDate: '2024-03-01' },
  ]);

  const [attendance, setAttendance] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const classes = ['JEE Advanced', 'JEE Mains', 'NEET', 'Foundation'];
  
  const stats = {
    totalStudents: students.length,
    activeStudents: students.filter(s => s.status === 'active').length,
    totalRevenue: students.reduce((sum, s) => sum + s.paid, 0),
    pendingFees: students.reduce((sum, s) => sum + (s.fees - s.paid), 0),
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.phone.includes(searchQuery);
    const matchesFilter = filterClass === 'all' || student.class === filterClass;
    return matchesSearch && matchesFilter;
  });

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<Users className="w-8 h-8" />} title="Total Students" value={stats.totalStudents} color="blue" />
        <StatCard icon={<UserPlus className="w-8 h-8" />} title="Active Students" value={stats.activeStudents} color="green" />
        <StatCard icon={<DollarSign className="w-8 h-8" />} title="Revenue" value={`₹${stats.totalRevenue.toLocaleString()}`} color="purple" />
        <StatCard icon={<Clock className="w-8 h-8" />} title="Pending Fees" value={`₹${stats.pendingFees.toLocaleString()}`} color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Class Distribution
          </h3>
          <div className="space-y-3">
            {classes.map(cls => {
              const count = students.filter(s => s.class === cls).length;
              const percentage = (count / students.length * 100).toFixed(1);
              return (
                <div key={cls}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{cls}</span>
                    <span className="font-semibold">{count} students ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Recent Activities
          </h3>
          <div className="space-y-3">
            <ActivityItem text="Priya Sharma paid ₹5,000" time="2 hours ago" type="payment" />
            <ActivityItem text="New student Amit Patel enrolled" time="5 hours ago" type="enrollment" />
            <ActivityItem text="Class JEE Advanced scheduled" time="1 day ago" type="schedule" />
            <ActivityItem text="Monthly report generated" time="2 days ago" type="report" />
          </div>
        </div>
      </div>
    </div>
  );

  const Students = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold">Student Management</h2>
          <button
            onClick={() => setShowAddStudent(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <UserPlus className="w-5 h-5" />
            Add Student
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Classes</option>
            {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map(student => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">ID: {student.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.phone}</div>
                    <div className="text-sm text-gray-500">{student.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{student.paid.toLocaleString()} / ₹{student.fees.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">
                      {student.paid === student.fees ? 'Paid' : `Due: ₹${(student.fees - student.paid).toLocaleString()}`}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Attendance = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Attendance Tracking</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
        <select className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Present</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Absent</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Percentage</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.slice(0, 4).map(student => {
              const present = Math.floor(Math.random() * 20) + 15;
              const absent = Math.floor(Math.random() * 5);
              const total = present + absent;
              const percentage = ((present / total) * 100).toFixed(1);
              return (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {student.name.charAt(0)}
                      </div>
                      <span className="ml-3 text-sm font-medium">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-semibold">{present}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-red-600 font-semibold">{absent}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      parseFloat(percentage) >= 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {percentage}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const Payments = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Fee Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm text-green-600 font-medium">Total Collected</div>
          <div className="text-2xl font-bold text-green-700">₹{stats.totalRevenue.toLocaleString()}</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-sm text-orange-600 font-medium">Pending Dues</div>
          <div className="text-2xl font-bold text-orange-700">₹{stats.pendingFees.toLocaleString()}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm text-blue-600 font-medium">Expected Total</div>
          <div className="text-2xl font-bold text-blue-700">₹{students.reduce((sum, s) => sum + s.fees, 0).toLocaleString()}</div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Fees</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paid</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map(student => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">{student.name}</div>
                  <div className="text-sm text-gray-500">{student.class}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">₹{student.fees.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">₹{student.paid.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={student.paid === student.fees ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    ₹{(student.fees - student.paid).toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {student.paid < student.fees && (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition">
                      Record Payment
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CoachingPro</h1>
              <p className="text-xs text-gray-500">Class Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-2">
            <NavItem icon={<TrendingUp />} text="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
            <NavItem icon={<Users />} text="Students" active={activeTab === 'students'} onClick={() => setActiveTab('students')} />
            <NavItem icon={<Calendar />} text="Attendance" active={activeTab === 'attendance'} onClick={() => setActiveTab('attendance')} />
            <NavItem icon={<DollarSign />} text="Payments" active={activeTab === 'payments'} onClick={() => setActiveTab('payments')} />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'students' && <Students />}
          {activeTab === 'attendance' && <Attendance />}
          {activeTab === 'payments' && <Payments />}
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, color }) => {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
        <div className={`w-14 h-14 bg-gradient-to-br ${colors[color]} rounded-lg flex items-center justify-center text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    {React.cloneElement(icon, { className: 'w-5 h-5' })}
    <span className="font-medium">{text}</span>
  </button>
);

const ActivityItem = ({ text, time, type }) => {
  const colors = {
    payment: 'bg-green-100 text-green-600',
    enrollment: 'bg-blue-100 text-blue-600',
    schedule: 'bg-purple-100 text-purple-600',
    report: 'bg-orange-100 text-orange-600',
  };

  return (
    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
      <div className={`w-2 h-2 rounded-full mt-2 ${colors[type]}`}></div>
      <div className="flex-1">
        <p className="text-sm text-gray-900">{text}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default CoachingManagementApp;
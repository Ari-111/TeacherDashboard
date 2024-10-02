import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Calendar, BookOpen, Activity, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const performanceData = [
    { name: 'Class A', score: 80 },
    { name: 'Class B', score: 75 },
    { name: 'Class C', score: 85 },
    { name: 'Class D', score: 70 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Class Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Class A - 10:00 AM</li>
                  <li>Class B - 11:30 AM</li>
                  <li>Class C - 2:00 PM</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Graded Class B assignments</li>
                  <li>Uploaded attendance for Class A</li>
                  <li>Scheduled parent-teacher meeting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        );
      case 'attendance':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Upload Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Select Class:</label>
                  <select className="w-full p-2 border rounded">
                    <option>Class A</option>
                    <option>Class B</option>
                    <option>Class C</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2">Upload Method:</label>
                  <div className="space-x-4">
                    <Button>Manual Entry</Button>
                    <Button>Face Recognition</Button>
                  </div>
                </div>
                <Button className="w-full">Start Attendance</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 'evaluation':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Student Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Search student..." />
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Student Name</th>
                      <th className="text-left">Class</th>
                      <th className="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Class A</td>
                      <td><Button size="sm">Evaluate</Button></td>
                    </tr>
                    <tr>
                      <td>Jane Smith</td>
                      <td>Class B</td>
                      <td><Button size="sm">Evaluate</Button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">DelhiClassroom<sup className="text-purple-600">+</sup></span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, Teacher!</span>
              <Button variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Teacher Dashboard</h1>
        
        <div className="flex space-x-4 mb-6">
          <Button onClick={() => setActiveTab('dashboard')} variant={activeTab === 'dashboard' ? 'default' : 'outline'}>
            <Activity className="mr-2" size={16} /> Dashboard
          </Button>
          <Button onClick={() => setActiveTab('attendance')} variant={activeTab === 'attendance' ? 'default' : 'outline'}>
            <Users className="mr-2" size={16} /> Attendance
          </Button>
          <Button onClick={() => setActiveTab('evaluation')} variant={activeTab === 'evaluation' ? 'default' : 'outline'}>
            <BookOpen className="mr-2" size={16} /> Evaluation
          </Button>
          <Button onClick={() => setActiveTab('schedule')} variant={activeTab === 'schedule' ? 'default' : 'outline'}>
            <Calendar className="mr-2" size={16} /> Schedule
          </Button>
          <Button onClick={() => setActiveTab('settings')} variant={activeTab === 'settings' ? 'default' : 'outline'}>
            <Settings className="mr-2" size={16} /> Settings
          </Button>
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
};

export default TeacherDashboard;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import TeacherForm from './components/TeacherForm';
import TeacherList from './components/TeacherList';
import StudentDetails from './components/StudentDetails';
import TeacherDetails from './components/TeacherDetails';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/student-form" element={<StudentForm />} />
                <Route path="/student-list" element={<StudentList />} />
                <Route path="/student-details/:id" element={<StudentDetails />} />
                <Route path="/teacher-form" element={<TeacherForm />} />
                <Route path="/teacher-list" element={<TeacherList />} />
                <Route path="/teacher-details/:id" element={<TeacherDetails />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import StudentTable from './StudentTable';
import ImportButton from './ImportButton';
import axios from "axios"
const ViewEmployee = () => {
  const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/student-list');
            setStudents(response.data.data || []);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="App">
            <h1>Employee Management</h1>
            <ImportButton onImport={fetchStudents} />
            <StudentTable students={students} />
        </div>
    );
};

export default ViewEmployee;

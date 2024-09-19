// src/components/StudentTable.jsx
import React from 'react';
                      
const StudentTable = ({ students }) => {
    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>                                                                              
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.studentName}</td>
                                <td>{student.email}</td>
                                <td>{student.mobileNo}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No Employee found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;

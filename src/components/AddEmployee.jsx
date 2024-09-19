import React, { useState } from 'react';
import ImportButton from './ImportButton';
import axios from 'axios';
import "./AddEmployee.css";


function AddEmployee() {
 
  const [formData, setFormData] = useState({
    client: 'Stratosphere IT Service Pvt Ltd',
    title: 'Mr.',
    employeeName: '',
    email: '',
    mobileNo: '',
    startEmployment: '',
    resignationDate: '',
    endEmployment: '',
    grossSalary: '',
    ctc: '',
    isEsic: false,
    isPf: false,
    isMediclaim: false,
    epfEarnings: '',
    inhand: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jwtToken = localStorage.getItem('token');

    axios.post('http://localhost:8070/api/employee/add', formData, {
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      setMessage('Employee added successfully!');
      setFormData({ /* Reset form data */ });
    })
    .catch((error) => {
      setMessage('Failed to add employee.');
    });
  };

  return (
    <div className="main-content">
         
      <h1>Bulk Employee Management</h1>
      <h2>Add Employee</h2>
      {message && <div className="message">{message}</div>}
   
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label>Client</label>
          <select name="client" value={formData.client} onChange={handleChange}>
            <option value="Stratosphere IT Service Pvt Ltd">Stratosphere IT Service Pvt Ltd</option>
          </select>
        </div>
        <div className="form-group">
          <label>Title</label>
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>
        <div className="form-group">
          <label>Employee Name</label>
          <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
        </div>
        <h3>Employment Information</h3>
        <div className="form-group">
          <label>Start Employment</label>
          <input type="date" name="startEmployment" value={formData.startEmployment} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Resignation Date</label>
          <input type="date" name="resignationDate" value={formData.resignationDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>End Employment</label>
          <input type="date" name="endEmployment" value={formData.endEmployment} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gross Salary</label>
          <input type="number" name="grossSalary" value={formData.grossSalary} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>CTC</label>
          <input type="number" name="ctc" value={formData.ctc} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>In Hand Salary</label>
          <input type="number" name="inhand" value={formData.inhand} onChange={handleChange} required />
        </div>
        <h3>Benefits</h3>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isEsic" checked={formData.isEsic} onChange={handleChange} />
            Is ESIC
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isPf" checked={formData.isPf} onChange={handleChange} />
            Is PF
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isMediclaim" checked={formData.isMediclaim} onChange={handleChange} />
            Is Mediclaim
          </label>
        </div>
        <div className="form-group">
          <label>Earning for EPF</label>
          <input type="text" name="epfEarnings" value={formData.epfEarnings} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddEmployee;

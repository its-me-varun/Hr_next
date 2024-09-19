import React, { useState } from 'react';
import axios from 'axios';
import "./ImportButton.css"

const ImportButton = ({ onImport }) => {
    // State for the Update Employee functionality
    const [uploadingUpdate, setUploadingUpdate] = useState(false);
    const [updateError, setUpdateError] = useState('');
    const [updateFileName, setUpdateFileName] = useState('');

    // State for the Add Employee functionality
    const [uploadingAdd, setUploadingAdd] = useState(false);
    const [addError, setAddError] = useState('');
    const [addFileName, setAddFileName] = useState('');

    // Function for updating employee
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setUpdateFileName(file.name);
            setUploadingUpdate(true);
            setUpdateError('');

            try {
                const formData = new FormData();
                formData.append('file', file);
                console.log("form-data")

                await axios.post('http://localhost:8081/api/excel/employee/update', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                onImport(); // Notify parent to refresh the employee list
                setUpdateError(''); // Clear error if successful

            } catch (error) {
                console.error('Error uploading file:', error);
                setUpdateError('Failed to upload file. Please try again.');
            } finally {
                setUploadingUpdate(false);
            }
        }
    };

    // Function for adding employee
    const handleAddEmployee = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setAddFileName(file.name);
            setUploadingAdd(true);
            setAddError('');

            try {
                const formData = new FormData();
                formData.append('file', file);

              const response =  await axios.post('http://localhost:8081/api/excel/employee/add', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log(response.data);

                onImport(); // Notify parent to refresh the employee list
                setAddError(''); // Clear error if successful

            } catch (error) {
                console.error('Error uploading file:', error);
                setAddError('Failed to upload file. Please try again.');
            } finally {
                setUploadingAdd(false);
            }
        }
    };

    return (
        <div>
            {/* File input for updating employee by ID */}
            <input 
                type="file" 
                accept=".xlsx" 
                id="file-upload-update" // Unique ID for update functionality
                style={{ display: 'none' }} 
                onChange={handleFileUpload} 
            />
            <label htmlFor="file-upload-update" className="upload-button">
                {uploadingUpdate ? 'Uploading...' : updateFileName ? `Uploaded: ${updateFileName}` : 'Update Employee By ID'}
            </label>
            {updateError && <p style={{ color: 'red' }}>{updateError}</p>}
            
            {/* File input for adding a new employee */}
            <input 
                type="file" 
                accept=".xlsx" 
                id="file-upload-add" // Unique ID for add functionality
                style={{ display: 'none' }} 
                onChange={handleAddEmployee} 
            />
            <label htmlFor="file-upload-add" className="upload-button">
                {uploadingAdd ? 'Uploading...' : addFileName ? `Uploaded: ${addFileName}` : 'Add Employee'}
            </label>
            {addError && <p style={{ color: 'red' }}>{addError}</p>}
        </div>
    );
};

export default ImportButton;

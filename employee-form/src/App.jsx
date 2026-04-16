import React, { useState } from 'react';

export default function EmployeeForm() {
  const initialFormState = { name: '', department: '', salary: '' };
  
  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setSubmittedData(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
        />
        <input 
          name="department" 
          value={formData.department} 
          onChange={handleChange} 
          placeholder="Department" 
        />
        <input 
          name="salary" 
          type="number" 
          value={formData.salary} 
          onChange={handleChange} 
          placeholder="Salary" 
        />
        
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #ccc' }}>
          <h3>Employee Details:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Dept:</strong> {submittedData.department}</p>
          <p><strong>Salary:</strong> ${submittedData.salary}</p>
        </div>
      )}
    </div>
  );
}
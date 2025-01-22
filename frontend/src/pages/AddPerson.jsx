import React, { useState } from 'react';
import axios from 'axios';

const AddPerson = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/person', { name, age, email });
      alert('Person added successfully!');
      setName('');
      setAge('');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Failed to add person.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-6">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-80"
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 w-80"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-80"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Person
      </button>
    </form>
  );
};

export default AddPerson;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPerson = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/person');
        setPersons(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPersons();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Person List</h2>
      <ul className="mt-4">
        {persons.map((person) => (
          <li key={person.id} className="border-b p-2">
            {person.name} - {person.age} - {person.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPerson;

"use client"
import React, { useState, ChangeEvent } from 'react';

interface Person {
  name: string;
  email: string;
}

interface StateWithObjectProps {}

const StateWithObject: React.FC<StateWithObjectProps> = () => {
  const [data, setData] = useState<Person[]>([]);
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  const handleSubmit = () => {
    const newPerson: Person = {
      name: inputName,
      email: inputEmail,
    };
    setData([...data, newPerson]);

    setInputName('');
    setInputEmail('');
  };

  return (
    <div>
      {data.length > 0 ? (
        data.map((person, index) => (
          <div key={index}>
            {person.name} - {person.email}
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}

      <div>
        <input type='text' value={inputName} onChange={handleNameChange} placeholder="Name" />
        <input type='text' value={inputEmail} onChange={handleEmailChange} placeholder="Email" />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StateWithObject;

import React, { useState } from 'react';

const Navbar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    fetch("http://localhost:8000/employee")
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredData);
      });
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(item => (
          <li key={item.id}>{item.name},{item.company},{item.order},{item.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
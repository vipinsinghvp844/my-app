import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

SearchBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};

SearchBox.defaultProps = {
  data: []
};

export default SearchBox;

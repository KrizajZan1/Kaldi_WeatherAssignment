import React from 'react';

const SearchHistory = ({ history, onClick }) => {
  if (history.length === 0) {
    return <p>Trenutno ni iskanih mest.</p>;
  }

  return (
    <div className="search-history">
      <h3>Zgodovina iskanj:</h3>
      <ul>
        {history.map((city, index) => (
          <li key={index} onClick={() => onClick(city)} style={{ cursor: 'pointer' }}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;

import PropTypes from 'prop-types';
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      window.alert('Type a movie name.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={event => setQuery(event.target.value.toLowerCase())}
        value={query}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search for a movie"
      />
      <button type="submit" aria-label="search">
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

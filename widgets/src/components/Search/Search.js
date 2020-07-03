import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import wikipedia from '../../apis/wikipedia';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wikipedia.get('', {
        params: {
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term.length > 2) {
      search();
    }
  }, [term]);

  return (
    <div className="search">
      <form noValidate autoComplete="off">
        <TextField
          id="search-term,"
          label="Enter Search Term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;

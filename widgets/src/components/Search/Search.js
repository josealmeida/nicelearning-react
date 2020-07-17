import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import wikipedia from '../../apis/wikipedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const Search = () => {
  const [term, setTerm] = useState('book');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wikipedia.get('', {
        params: {
          srsearch: debouncedTerm,
        },
      });
      if (data.query) {
        setResults(data.query.search);
      } else {
        setResults([]);
      }
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <Card key={result.pageid} style={{ marginBottom: '10px' }}>
        <CardContent>
          <Typography variant="h6">{result.title}</Typography>
          <Typography variant="body1">
            <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
          >
            Go
          </Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <div className="search">
      <form
        noValidate
        autoComplete="off"
        style={{ paddingTop: '10px', paddingBottom: '20px' }}
      >
        <TextField
          id="search-term"
          label="Enter Search Term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          fullWidth
        />
      </form>
      {renderedResults}
    </div>
  );
};

export default Search;

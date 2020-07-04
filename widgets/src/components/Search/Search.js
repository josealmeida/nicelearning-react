import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import wikipedia from '../../apis/wikipedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

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

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      // clean-up function gets invoked the next
      // time useEffect is called / component re-render
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

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
      <Card key="search-card" style={{ marginBottom: '10px' }}>
        <CardContent>
          <form noValidate autoComplete="off">
            <TextField
              id="search-term"
              label="Enter Search Term"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              fullWidth
            />
          </form>
        </CardContent>
      </Card>
      {renderedResults}
    </div>
  );
};

export default Search;

import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Convert from '../Convert';
import Typography from '@material-ui/core/Typography';

const options = [
  { label: 'Portuguese', value: 'pt' },
  { label: 'French', value: 'fr' },
  { label: 'Spanish', value: 'es' },
  { label: 'Dutch', value: 'nl' },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          <FormControl>
            <Input
              id="translate-text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Text"
              inputProps={{ 'aria-label': 'enter text' }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <Dropdown
            selected={language}
            onSelectedChange={setLanguage}
            options={options}
            label="Select a language"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Output
          </Typography>
          <Convert text={text} language={language} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Translate;

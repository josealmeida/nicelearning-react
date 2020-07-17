import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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
      <Paper style={{ paddingLeft: '10px', paddingRight: '10px' }}>
        <Grid container spacing={3} style={{ marginTop: '10px' }}>
          <Grid item xs={12} style={{ paddingBottom: '10px' }}>
            <FormControl>
              <InputLabel htmlFor="translate-text-input">Enter Text</InputLabel>
              <Input
                id="translate-text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
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
      </Paper>
    </div>
  );
};

export default Translate;

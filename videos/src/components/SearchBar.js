import React from 'react';
import './SearchBar.css';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <Paper>
          <form className="search-bar-form" onSubmit={this.onFormSubmit}>
            <TextField
              label="Video Search"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="outlined"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </form>
        </Paper>
      </div>
    );
  }
}

export default SearchBar;

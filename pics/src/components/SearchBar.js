import React from 'react';
import { Form, Segment } from 'semantic-ui-react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <Segment>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <Form.Input
                fluid
                label="Image Search"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </Form.Field>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default SearchBar;

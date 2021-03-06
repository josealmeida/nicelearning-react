import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class StreamCreate extends Component {
  renderTextField({
    label,
    input,
    variant,
    meta: { touched, invalid, error },
    ...custom
  }) {
    return (
      <TextField
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        variant={variant}
        {...input}
        {...custom}
      />
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div className="stream-create">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <Field
              name="title"
              component={this.renderTextField}
              label="Title"
              variant="standard"
            />
          </div>
          <div>
            <Field
              name="description"
              component={this.renderTextField}
              label="Description"
              variant="standard"
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues?.title) {
    errors.title = 'You must enter a title.';
  }
  if (formValues?.title?.length < 3) {
    errors.title = 'Title length should be more than 3 characters.';
  }
  if (!formValues?.description) {
    errors.description = 'You must enter a description.';
  }

  return errors;
};

export default reduxForm({ form: 'streamCreate', validate })(StreamCreate);

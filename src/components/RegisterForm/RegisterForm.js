import React, { Component } from 'react';
import { reduxForm, Field, propTypes, fieldPropTypes } from 'redux-form';
import { LinkContainer } from 'react-router-bootstrap';
import CountryList from 'country-list';
import registerValidation from './registerValidation';

const countries = CountryList();

const Input = ({
  input, label, type, meta: { touched, error }
}) => (
  <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-2">
      {label}
    </label>
    <div className="col-sm-10">
      <input {...input} type={type} className="form-control" />
      {error && touched && <span className="glyphicon glyphicon-remove form-control-feedback" />}
      {error &&
        touched && (
        <div className="text-danger">
          <strong>{error}</strong>
        </div>
      )}
    </div>
  </div>
);

Input.propTypes = fieldPropTypes;

const GenderInput = ({
  input, label, meta: { touched, error }
}) => (
  <div className="form-group">
    <label className="col-sm-2">
      {label}
    </label>
    <div className="col-sm-10">
      <input type="radio" id="sex-male" {...input} value="male" checked={input.value === 'male'} />
      <label htmlFor="sex-male">Male</label>
      &nbsp;
      <input type="radio" id="sex-female" {...input} value="female" checked={input.value === 'female'} />
      <label htmlFor="sex-female">Female</label>
      {error &&
        touched && (
        <div className="text-danger">
          <strong>{error}</strong>
        </div>
      )}
    </div>
  </div>
);

GenderInput.propTypes = fieldPropTypes;

const SelectInput = ({
  input, label, meta: { touched, error }, children
}) => (
  <div className="form-group">
    <label className="col-sm-2">
      {label}
    </label>
    <div className="col-sm-10">
      <select {...input} className="form-control">
        {children}
      </select>
      {error &&
        touched && (
        <div className="text-danger">
          <strong>{error}</strong>
        </div>
      )}
    </div>
  </div>
);

SelectInput.propTypes = fieldPropTypes;

@reduxForm({
  form: 'register',
  validate: registerValidation
})
export default class RegisterForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="firstname" type="text" component={Input} label="First Name" />
        <Field name="lastname" type="text" component={Input} label="Last Name" />
        <Field name="gender" type="text" component={GenderInput} label="Gender" />
        <Field name="country" type="text" component={SelectInput} label="Country">
          <option value="" key="country-code-none"> -- Please select -- </option>
          {countries.getData().map(country => <option value={country.code} key={country.code}>{country.name}</option>)}
        </Field>
        <Field name="email" type="text" component={Input} label="Email" />
        <Field name="username" type="text" component={Input} label="UserName" />
        <Field name="password" type="password" component={Input} label="Password" />
        <Field name="password_confirmation" type="password" component={Input} label="Password confirmation" />
        {error && (
          <p className="text-danger">
            <strong>{error}</strong>
          </p>
        )}
        <button className="btn btn-success" type="submit">
          <i className="fa fa-sign-in" /> Register
        </button>
        &nbsp;
        <LinkContainer to="/login">
          <button className="btn btn-success" type="button">
            <i className="fa fa-sign-in" /> Login
          </button>
        </LinkContainer>
      </form>
    );
  }
}

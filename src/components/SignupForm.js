import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };
  
  /* Render */
  render() {
    return (
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <ul class="loginText">
          <li><h4>Sign Up</h4></li>
          <li><label htmlFor="username">Username</label></li>
          <li><input
            class="inputArea"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handle_change}
          /></li>
          <li><label htmlFor="password">Password</label></li>
          <li><input
            class="inputArea"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle_change}
          /></li>
          <li><input type="submit" /></li>
        </ul>
      </form>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
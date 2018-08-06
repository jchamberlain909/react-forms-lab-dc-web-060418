import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  onUsernameChange = (e) => {
    this.setState({username:e.target.value})
  }

  onPasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    if (this.state.username!=="" && this.state.password!=="") {
      this.props.onSubmit(e)
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.onUsernameChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.onPasswordChange} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

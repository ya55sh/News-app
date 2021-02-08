import React from "react";
import { Link } from "react-router-dom";
import "../Signup/Signup.css";

class Signup extends React.Component {
  constructor(){
    super();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.confirmPassword = React.createRef();
  }

  SignUp = async ()=>{
    //console.log("asd" + this.emailInput + this.passwordInput)
    const url = "http://localhost:9090/getSignUP?";
    const resp = await fetch(url + new URLSearchParams({
      email: this.emailInput.current.value,
      password: this.passwordInput.current.value,
      confirm: this.confirmPassword.current.value
    }));
    // fetch('https://example.com?' + new URLSearchParams({
//     foo: 'value',
//     bar: 2,
// }))
    const data = await resp.text();
    console.log(data);
  }


  render() {
    return (
      <div className="parent">
        <div className="App-heading">
            <h1>The News World</h1>
          </div>
        <div className="form">
          <h3>Sign Up</h3>
          <input ref={this.emailInput} type="email" placeholder="email" />
          <br />
          <input ref={this.passwordInput} type="password" placeholder="enter password" />
          <br />
          <input ref={this.confirmPassword} type="password" placeholder=" confirm password" />
          <br />
          <div></div>
          <button onClick={this.SignUp}>Sign Up</button>
          <div className="Back-to-Login">
            <div>Back to login?</div>
            <Link className="Link-login" to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;

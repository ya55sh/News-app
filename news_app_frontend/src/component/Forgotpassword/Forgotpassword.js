import React, { createRef } from "react";
import { Link,Redirect } from "react-router-dom";
import "../Forgotpassword/Forgotpassword.css";

class Forgotpassword extends React.Component {
  constructor() {
    super();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.confirmPassword = React.createRef();
    this.state={
      unmatchPassword : false,
      password:"",
    confirmPassword:"",
    passwordChanged:false
    }
  }

  Forgot = async () => {
    if (
      this.passwordInput.current.value === this.confirmPassword.current.value
    ) {
      this.setState({
        unmatchPassword:false
      })
      console.log("asd" + this.emailInput + this.passwordInput);
      const url = "http://localhost:9090/getForgotPassword?";
      const resp = await fetch(
        url +
          new URLSearchParams({
            email: this.emailInput.current.value,
            password: this.passwordInput.current.value,
            confirm: this.confirmPassword.current.value,
          })
      );
      // fetch('https://example.com?' + new URLSearchParams({
      //     foo: 'value',
      //     bar: 2,
      // }))
      const data = await resp.text();
      console.log(data);
      setTimeout(()=>{
      this.setState({passwordChanged:true})},2000);
    }
    else {
      this.setState({
        unmatchPassword:true
      })
    }
  };

  render() {
    if(this.state.passwordChanged) {
      return <Redirect to={"/login"} />
    }
    return (
      
      <div>
        <div className="parent">
          <div className="App-heading">
            <h1>The News World</h1>
          </div>
          <div className="form">
            <h3>Forgot password?</h3>
            <input
              ref={this.emailInput}
              type="email"
              placeholder="please enter your email"
            />
            <input
            onChange={(value)=>{this.setState({password:value.target.value})}}
              ref={this.passwordInput}
              type="password"
              placeholder="please enter your new password"
            />
            <input
            onChange={(value)=>{
              //console.log("value",value)
              this.setState({confirmPassword:value.target.value})}}
              ref={this.confirmPassword}
              type="password"
              placeholder="please confirm your new password"
            />
            <button onClick={this.Forgot}>Confirm</button>
            {this.state.password!==this.state.confirmPassword ? <p>{"passwords didn't match"}</p>:null}
            <div className="Back-to-Login">
              <div>Back to login?</div>
              <Link className="Link-login" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgotpassword;

import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../login/Login.css";
class Login extends React.Component {
  constructor(){
    super();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.state = {
      isloggedin: false,
      failedlogin: false
    }
  }


  Login= async ()=>{
   // console.log("asd" + this.emailInput + this.passwordInput)
    const url = "http://localhost:9090/getLogin?";
    const resp = await fetch(url + new URLSearchParams({
      email: this.emailInput.current.value,
      password: this.passwordInput.current.value
    }));
    // fetch('https://example.com?' + new URLSearchParams({
//     foo: 'value',
//     bar: 2,
// }))
    const data = await resp.text();

    if(data==="user not found"){
      this.setState({
        failedlogin : true
      })
    }
    else{
      this.setState({
        isloggedin: true
      })
    }
    console.log(data);
  }

  render() {
    if(this.state.isloggedin){
      return( <Redirect to={"/home"} />)
    }
    return (
    
      <div className="parent">
        <div className="App-heading">
            <h1>The News World</h1>
          </div>
        <div className="form">
          <h3>Login</h3>
          <input ref={this.emailInput} type="email" placeholder="enter your email" />
          <br />
          <input ref={this.passwordInput} type="password" placeholder="enter your password" />
          <br />
          <button onClick={this.Login}>Log In</button>
          {this.state.failedlogin?<p>login failed</p>:null}
          <div className="Account-and-Signup">
            <div>Don't have an account?</div>
            <Link className="Link-signup" to="/signup">
              Sign up!
            </Link>
          </div>

          <br />

          <div className="Forgotpassword">
            <div>Forgot password?</div>
            <Link className="Link-forgotpassword" to="/forgotpassword">Click here!</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

import React, { Component } from "react";
import "./auth.style.scss";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth.actions'; 

class Auth extends Component {

  state={
    email:"",
    password:"",
    loginErr:{
      emailErr:false,
      passwrodErr:false
    }
  }

  handleLogin=()=>{
    const { userLogin ,history } = this.props;
    userLogin( this.state.email , this.state.password )
  }

  handleOnChange = event =>{
    console.log('event',event)
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
      <div className="login-wrapper">
          <h1 className='title'>Luniva Softnonic Pvt.Ltd</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              class="form-control"
              value={ this.state.email }
              onChange={(event)=> this.handleOnChange( event ) }
              placeholder="Enter email"
              style={{ borderColor: this.state.loginErr.emailErr ? 'red':''}}
              
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              value={ this.state.password }
              placeholder="Password"
              onChange={(event)=> this.handleOnChange( event ) }
              name="password"
            />
          </div>
          <div className="forgot-password">
              <a href="#">Forgot a Password ?? </a>
             <Link to="/register">Regester here.</Link>
          </div>
          {/* <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div> */}
          <button onClick={ this.handleLogin } class="btn btn-primary">
            LOGIN
          </button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {

  }
}
const mapDispatchToProps = dispatch=>{
  return {
    userLogin:( email , password )=>dispatch( login( email , password ) )
  }
}

export default connect( mapStateToProps , mapDispatchToProps )( Auth );

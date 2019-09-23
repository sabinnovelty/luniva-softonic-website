import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './pages/Authentication/auth.component';
import './App.css';
import Register from './pages/Register/register.component';
import HomePage from './pages/HomePage/homepage.component';

class App extends React.Component {


 
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Auth} />
           <Route path='/register' component={Register} />
           <Route path='/dashboard' component={HomePage} />
          {/* <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />  */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state=>{
  console.log('stae',state)
  return {

  }
}

export default connect( mapStateToProps ,null)(App);

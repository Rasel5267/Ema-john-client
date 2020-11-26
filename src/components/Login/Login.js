import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import {auth} from './firebase.config';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/');
    })
    .catch(function(error) {
      alert(error.message)
    });
  }

  const register = e => {
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then( auth => {
      console.log(auth);
      if(auth) {
        history.push('/')
      }
    })
    .catch( error => {
      alert(error.message)
    });
  }

  return (
    <div className="login">
      <div className="row">
        <Link to="/"><img src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="logo" className="login__logo"/></Link>
      </div>
      <div className="row">
        <div className="login__container">
          <h1 className="text-center">Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input className="login__input" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input className="login__input" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit" onClick={signIn} className="login__signInBtn">Sign in</button>
          </form>
          <p>By signing-in you agree to the terms and conditions of use and sale. Please see our Privacy Policy, our Cookie Policy and our Interest-Base Ads Policy</p>
          <button onClick={register} className="login__registerBtn">Create your Amazon account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

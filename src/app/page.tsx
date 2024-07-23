'use client';
import { useState } from 'react';

export default function Home() {

  const [ showLogin, setShowLogin ] = useState(false);

  return (
    <div className="container">
      <div className="mobile-content">

        <div className={ showLogin ? "singup-content show" : "singup-content" }>
          <div className="background">
            <div className="overlay-blur"/>
            <img src="https://i.imgur.com/F49FcWO.jpg" alt="background" />
          </div>

          <div className="form-content">
            <div className="titulo">
              <h1>Sign up</h1>
            </div>

            <div className="data">

              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="nope"
                  // Ni pedo, no jalo el autoComplete="nope"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="nope"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="nope"
                />
              </form>

              <div className="btn-content">
                <button className="btn-primary">
                  <p>Sign Up</p>
                </button>
              </div>

            </div>
          </div>

          <div className="btn-signup" onClick={ () => setShowLogin(!showLogin ) }>
            <p>or <span>Sign up</span></p>
          </div>

        </div>

        <div className={ showLogin ? "login-content show" : "login-content" }>

          <div className="form-content">
            <div className="titulo">
              <h1>Log In</h1>
            </div>

            <div className="data">

              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="nope"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="nope"
                />
              </form>

              <div className="btn-content">
                <button className="btn-primary">
                  <p>Log In</p>
                </button>
              </div>

            </div>
          </div>

          <div className="btn-action" onClick={ () => setShowLogin(!showLogin ) }>
            <p>or <span>Log in</span></p>
          </div>

        </div>

      </div>
    </div>
  );
}

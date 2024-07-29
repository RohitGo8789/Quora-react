import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { auth, provider } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth,email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt=""
          />
        </div>
        <div className="login_desc">
          <p>A Place to Share knowledge and better understand the world</p>
        </div>
        <div className="login_auth">
          <div className="login_authOptions">
            <div className="login_authOption">
              <img
                className="login_googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            <div className="login__authOption">
              <img
                className="login__fbAuth"
                src="https://www.svgrepo.com/show/158427/facebook.svg"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
            <div className="login_authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                Quora's
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          <div className="login_emailPass">
            <div className="login_label">
              <h4>Login</h4>
            </div>
            <div className="login_inputFields">
              <div className="login_inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login_inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login_forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>
        <div className="login_lang">
          <p>हिन्दी</p>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
        <div className="login_footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora-Clone Inc. 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
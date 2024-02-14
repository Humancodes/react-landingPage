import React from "react";
import "./signInForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <form action="" className="signInFormCont">
      <div className="headingCont">
        <div className="heading1">
          <Link to="/login" style={{ color: "#8064a2" }}>
            SignIn
          </Link>
        </div>
        <div className="heading2">
          <Link to="/register" style={{ color: "rgb(176, 176, 176)" }}>
            JoinIn
          </Link>
        </div>
      </div>
      <button className="blockBtn">
        {" "}
        <img className="icons" src="/assets/google.svg" alt="google icon" />
        Continue with Google
      </button>
      <button className="blockBtn">
        <img className="icons" src="/assets/facebook.svg" alt="facebook icon" />
        Continue with Facebook
      </button>
      <div className="connectBox">
        <hr />
        <div className="connectText">Or connect with</div>
        <hr />
      </div>
      <input className="userInputs" placeholder="email" type="text" />
      <input className="userInputs" placeholder="password" type="text" />
      <div className="forgetPassBox">
        <div>
          <input type="checkbox" id="rememberText" />
          <label className="px-1" htmlFor="rememberText">
            Remember me
          </label>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLock}
            className="px-1"
            style={{ color: "gray", width: "14px", height: "14px" }}
          />
          Forgot password?
        </div>
      </div>
      <button className="btnLogin">Continue</button>
    </form>
  );
};

export default SignInForm;

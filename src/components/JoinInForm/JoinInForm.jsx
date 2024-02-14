import React from "react";
import "./joinInForm.css";
import { Link } from "react-router-dom";

const JoinInForm = () => {
  return (
    <form action="" className="joinInFormCont">
      <div className="headingContJ">
        <div className="heading1J">
          <Link to="/login" style={{ color: "rgb(176, 176, 176)" }}>
            SignIn
          </Link>
        </div>
        <div className="heading2J">
          <Link to="/register" style={{ color: "#8064a2" }}>
            JoinIn
          </Link>
        </div>
      </div>
      <button className="blockBtnJ">
        {" "}
        <img className="iconsJ" src="/assets/google.svg" alt="google icon" />
        Continue with Google
      </button>
      <button className="blockBtnJ">
        <img
          className="iconsJ"
          src="/assets/facebook.svg"
          alt="facebook icon"
        />
        Continue with Facebook
      </button>
      <div className="connectBoxJ">
        <hr />
        <div className="connectTextJ">Or connect with</div>
        <hr />
      </div>
      <input className="userInputsJ" placeholder="email" type="text" />
      <input className="userInputsJ" placeholder="password" type="text" />
      <div className="forgetPassBoxJ">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </div>
      <button className="btnRegister">Agree and Continue</button>
    </form>
  );
};

export default JoinInForm;

import React, { useState } from "react";
import { Image, InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import { setAuthState } from "../../actions/auth_actions";
import { UTILS } from "../../constants/UTILS";
import "./login.css";

const { COLORS } = UTILS;
const Login = (props) => {
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [usernameErr, setUsernameErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (usernameErr) setUsernameErr("");
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
    if (passErr) setPassErr("");
  };

  const buttonOnClick = () => {
    if (!username) setUsernameErr("Username cannot be empty!");
    if (!pass) setPassErr("Password cannot be empty!");
    else {
      // TODO: connect to backend for login
      console.log("login with credentials ", username, pass);
      props.setAuthState(UTILS.AUTH_STATE.LOG_IN);
      props.toggleLoginModal();
    }
  };

  return (
    <div
      className="d-flex border flex-column align-items-center"
      style={{
        height: "auto",
        padding: 20,
        backgroundColor: COLORS.GREEN_MAIN,
      }}
    >
      <Image
        src={require("../../assets/login_chart.svg")}
        className="chart-img"
      />
      <Button
        className="close-btn"
        style={{
          position: "absolute",
          right: 4,
          top: 4,
        }}
        onClick={() => props.toggleLoginModal()}
      >
        <FontAwesome
          name="times"
          size="2x"
          style={{ color: COLORS.LIGHT_GRAY }}
        />
      </Button>

      <div className="login-card">
        <InputGroup>
          <div
            className="d-flex flex-row align-items-center"
            style={{ width: "100%" }}
          >
            <Image
              src={require("../../assets/profile_pic_ic.png")}
              className="icon"
            />
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="err">{usernameErr}</div>
        </InputGroup>
        <InputGroup className="margin-top">
          <div
            className="d-flex flex-row align-items-center"
            style={{ width: "100%" }}
          >
            <Image src={require("../../assets/lock.svg")} className="icon" />

            <FormControl
              placeholder="Password"
              aria-label="Password"
              type="password"
              aria-describedby="basic-addon1"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="err">{passErr}</div>
        </InputGroup>

        <div className="margin-top d-flex justify-content-center">
          <Button
            style={{
              backgroundColor: COLORS.GREEN_MAIN,
              color: "white",
              width: "100%",
              border: 0,
            }}
            onClick={buttonOnClick}
          >
            See Dashboard
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button className="forgot-pass" style={{ color: COLORS.GREEN_MAIN }}>
            Forgot password?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setAuthState })(Login);

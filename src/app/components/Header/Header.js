import React, { useState } from "react";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setAuthState } from "../../actions/auth_actions";
import "./header.css";
import Login from "../../containers/login/login";
import { UTILS } from "../../constants/UTILS";

const Header = ({ auth_state, setAuthState }) => {
  const [modalShown, toggleLoginModal] = useState(false);

  const logout = () => {
    console.log("HEYO");
    setAuthState(UTILS.AUTH_STATE.LOG_OUT);
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="http://localhost:3001/">SecureGrid</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {auth_state === UTILS.AUTH_STATE.LOGGED_IN && (
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => {
                window.open("http://localhost:3000/", "_blank");
              }}
            >
              Go to Dashboard
            </Nav.Link>
          </Nav>
        )}
        <Nav className="ml-auto">
          <Nav.Link href="about">About</Nav.Link>
          {auth_state === UTILS.AUTH_STATE.LOGGED_IN && (
            <div className='d-flex flex-row'>
              <Nav.Link href="inbox">Messages</Nav.Link>
              <Nav.Link href="profile">Profile</Nav.Link>
              <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
            </div>
          )}
          {auth_state === UTILS.AUTH_STATE.NOT_LOGGED_IN && (
            <Nav.Link onClick={() => toggleLoginModal(true)}>Login</Nav.Link>
          )}
        </Nav>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShown}
          onHide={() => toggleLoginModal(false)}
          style={{ padding: 0, margin: 0, border: 0 }}
        >
          <div style={{ backgroundColor: UTILS.COLORS.GREEN_MAIN }}>
            <Login toggleLoginModal={toggleLoginModal} />
          </div>
        </Modal>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth_state: auth.auth_state };
};

export default connect(mapStateToProps, { setAuthState })(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { SIGNUP_LOGIN_PATH, USER_PATH } from 'constants.js'
import 'bootstrap/dist/css/bootstrap.css';
import './Layout.scss'
import './common.scss'
import _ from "lodash"
import { setCurrentUser } from "actions/users"

class CLayout extends Component {

  componentDidMount() {
    const user_token = localStorage.getItem("auth_token")

    if(user_token)
      this.getLoggedUserInfo(user_token)
  }

  getLoggedUserInfo(user_token) {
    window.userServiceAxios.get(USER_PATH, {params: {user_token: user_token}}).then(response => {
      this.props.setCurrentUser(response.data.user)
    }).catch(error => {
      console.log(error)
    })
  }


  renderLoginButton() {
    return _.isEmpty(this.props.currentUser) ? <Nav.Link href="/login">Login</Nav.Link> : <Nav.Link href="#">Logout</Nav.Link>
  }

  renderNavBar() {
    if(SIGNUP_LOGIN_PATH.includes(this.props.location.pathname))
      return null
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
            <NavDropdown title="Sort" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">By name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">By date</NavDropdown.Item>
            </NavDropdown>
            {this.renderLoginButton()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

  render() {
    return (
      <div className="root-container">
        {this.renderNavBar()}
        {this.props.children}
      </div>
    )
  }
}

const RLayout = withRouter(CLayout)

const mapStoreToProps = store => ({
  currentUser: store.currentUser
})

const mapDispatchToProps = {
  setCurrentUser
}

export const Layout = connect(
  mapStoreToProps,
  mapDispatchToProps
)(RLayout)

// export default
export default RLayout
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <nav>
        <span>Welcome, {this.context.user.name}!</span>
        <Link
          className="navLink"
          onClick={this.handleLogoutClick}
          to='/login'>
          Logout
        </Link>
      </nav>
    )
  }

  renderLoginLink() {
    return (
      <nav >
        <Link to='/login' className="navLink">Login</Link>
        {' '}
        <Link to='/register' className="navLink">Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <div className="flex header">
          <h1>
            <Link to='/' className="navLink headerTitle">
              Spaced repetition
            </Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}

export default Header

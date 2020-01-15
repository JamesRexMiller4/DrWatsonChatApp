import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeUser, clearMessages} from '../../actions';
import { endConversation } from '../../apiCalls';
import './Header.css'

export class Header extends Component {

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.props.clearMessages();
      console.log('Working')
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

    render () {
      const { user } = this.props
    return (
      <header>
        <h1>Dr. Watson</h1>
        {user && <button onClick={this.signOut}>Sign Out</button>}
      </header>
    )
  }

}
export const mapStateToProps = ({ user, clearMessages }) => ({
  user,
  clearMessages
})

export const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch( removeUser() ),
  clearMessages: () => dispatch( clearMessages() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
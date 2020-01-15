import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, clearMessages } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export const App = ({user}) =>  {
  return (
    <div className="App">
      <Header />
      {!user && <WelcomeModal  />}
      {user && <ChatBox />}
    </div>
  );
}

export const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(App);
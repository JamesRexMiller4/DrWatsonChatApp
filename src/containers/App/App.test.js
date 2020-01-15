import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

jest.mock('../../apiCalls');

describe('App component', () => {
  // const mockRemoveUser = jest.fn();
  // const mockHasErrored = jest.fn();
  let wrapper;

  beforeEach(() => {
    const mockUser = {
      id: 1568665187737, 
      firstName: "Travis", 
      lastName: "Rollins", 
      feeling: "tired"
    };

    wrapper = shallow(<App
        user={mockUser}
    />);
  });

  it('should match the snapshot with a ChatBox if the user has signed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with a WelcomeModal if the user hasn't signed in yet", () => {
    const wrapper = shallow(<App
      user={null}
    />);

    expect(wrapper).toMatchSnapshot();
  });

describe('mapStateToProps', () => {
  it('should return an object with the user information', () => {
    const mockUser = {
      id: 1568665187737, 
      firstName: "Travis", 
      lastName: "Rollins", 
      feeling: "tired"
    };

    const mockState = {
      user: mockUser,
      messages: [{
        message: 'Hi there, my name is Dr. Watson. I understand that you have been feeling happy. That is super exciting to hear!',
        isUser: false,
      }],
      errorMsg: ''
    };
    const expected = {
      user: mockUser
    }

    const mappedProps = mapStateToProps(mockState);
    
    expect(mappedProps).toEqual(expected);
  });
  });
});
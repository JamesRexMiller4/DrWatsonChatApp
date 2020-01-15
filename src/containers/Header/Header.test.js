import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from './Header';

describe('Header component', () => {
  let wrapper
  const mockSignOut = jest.fn();
  beforeEach(() => {
    const mockUser = {
      id: 1568665187737, 
      firstName: "Travis", 
      lastName: "Rollins", 
      feeling: "tired"
    };
    wrapper = shallow(<Header user={mockUser} />) 
    wrapper.instance().signOut = jest.fn()
  })
  it('should match the snapshot displaying a logout button if there is a user', () => {
    expect(wrapper).toMatchSnapshot()

  });

  it('should match the snapshot with just the title if there is no user', () => {
    const wrapper = shallow(<Header user={null} signOut={mockSignOut} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call the signOut function when a user clicks on the button', async () => {
    const apiCalls = require('../../apiCalls')

    const endConvoSpy = jest.spyOn(apiCalls, 'endConversation');
    endConvoSpy.mockResolvedValue()

    wrapper.find('button').simulate('click');
    await Promise.resolve()

    expect(endConvoSpy).toHaveBeenCalled();
  })
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
        errorMsg: ''
      }]
    };
    const expected = {
      user: mockUser
    }

    const mappedProps = mapStateToProps(mockState);
    
    expect(mappedProps).toEqual(expected);
  });
});
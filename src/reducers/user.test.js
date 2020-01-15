import { user } from './user';

describe('user Reducer', () => {
 
it('should return default state', () => {
    const expected = null
    const result = user(undefined, {})
    expect(result).toEqual(expected)
})
 
it('should have a type CREATE_USER', () => {
    const mockPayload = {
      firstName: 'Jarvis',
    lastName: 'Blargus',
      feeling: 'Tired'
    }
    const mockAction = {
      type: 'CREATE_USER',
      user: mockPayload
    }

    const expected = mockPayload
    const result = user(null, mockAction)
    expect(result).toEqual(expected)

})

it('should have a type REMOVE_USER', () => {
    const mockAction = {
      type: 'REMOVE_USER',
    }
    const expected = null
    const result = user(null, mockAction)
    expect(result).toEqual(expected)
})
});
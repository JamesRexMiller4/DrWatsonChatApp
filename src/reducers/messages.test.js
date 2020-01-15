import { messages } from './messages'

describe('messages reducer', () => {
  it('should return a default state', () => {
    const expected = []
    const result = messages(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should have a type of ADD_MESSAGES', () => {
    const mockAction = {
      type: "ADD_MESSAGE",
    message: 'Hello, I am Dr. Watson, do you have health insurance?'
    }

    const expected = [{message: mockAction.message}]
    const result = messages([], mockAction)
    expect(result).toEqual(expected)
  })
  it('should have a type of CLEAR_MESSAGES', () => {
    const mockAction = {
      type: 'CLEAR_MESSAGES'
    }

    const expected = []
    const result = messages([{message: 'Hello, I am Dr. Watson, do you have health insurance?'}], mockAction)
    expect(result).toEqual(expected)
  })
})
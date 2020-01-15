import { errorMsg } from './errorMsg';

describe('errorMsg reducer', () => {
  it('should return a default state', () => {
    const expected = ''
    const result = errorMsg(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should have a type of HAS_ERRORED', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      errorMsg: 'Something bad happened'
    }

    const expected = 'Something bad happened'
    const result = errorMsg('', mockAction)
    expect(result).toEqual(expected)
  })
})

export const messages = (state= [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, {message: action.message}]
    case 'CLEAR_MESSAGE':
      return []
    default:
      break;
  }

// message, isUser

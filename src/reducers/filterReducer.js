export const NOTIFICATION_TYPES = {
  CLEAR_FILTER: 'CLEAR_FILTER',
  SET_FILTER: 'SET_FILTER',
}

const initialState = '';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_TYPES.SET_FILTER:
      return action.query
    case NOTIFICATION_TYPES.CLEAR_FILTER:
      return initialState
    default:
      return state
  }
}

export const setFilter = (query) => {
  return {
    type: NOTIFICATION_TYPES.SET_FILTER,
    query
  }
}

export const clearFilter = () => {
  return {
    type: NOTIFICATION_TYPES.CLEAR_FILTER,
  }
}

export default filterReducer
export const NOTIFICATION_TYPES = {
  CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
  SET_NOTIFICATION: 'SET_NOTIFICATION',
}
const initialState = '';

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_TYPES.SET_NOTIFICATION:
      return action.notification
    case NOTIFICATION_TYPES.CLEAR_NOTIFICATION:
      return initialState
    default:
      return state
  }
}

let timer;
export const setNotification = (notification, delay = 3) => (dispatch) => {
  dispatch({
    type: NOTIFICATION_TYPES.SET_NOTIFICATION,
    notification
  })

  if (!!timer) {
    clearTimeout(timer)
  }

  timer = setTimeout(() => {
    dispatch({
      type: NOTIFICATION_TYPES.CLEAR_NOTIFICATION,
    })
  }, 1000 * delay)
}

export default notificationReducer
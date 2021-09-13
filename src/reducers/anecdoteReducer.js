import anecdotesService from "../services/anecdotesService"

export const VOTE = 'VOTE'
export const ADD_ANECDOTE = 'ADD_ANECDOTE'
export const DATA_INIT = 'DATA_INIT'

export const voteUp = (id) => async (dispatch) => {
  const anecdoteVotedId = await anecdotesService.voteUp(id)
  dispatch({
    type: VOTE,
    data: { id: anecdoteVotedId }
  })
}

export const addAnecdote = (anecdoteContent) => async (dispatch) => {
  const anecdoteObj = await anecdotesService.createNew(anecdoteContent)
  dispatch({
    type: ADD_ANECDOTE,
    data: anecdoteObj
  })
}

export const initializeAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdotesService.getAll();

  dispatch({
    type: DATA_INIT,
    data: anecdotes
  })
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case DATA_INIT:
      return action.data
    case ADD_ANECDOTE:
      return [...state, action.data]
    case VOTE:
      const id = action.data.id
      return state.map(anecdote => {
        if (anecdote.id === id) {
          return {
            ...anecdote,
            votes: anecdote.votes + 1,
          }
        }
        return anecdote
      })
    default:
      return state
  }

}

export default anecdoteReducer
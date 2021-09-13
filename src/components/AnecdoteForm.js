import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ addAnecdote, setNotification }) => {

    const createAnecdote = async (evt) => {
        evt.preventDefault()
        const anecdoteContent = evt.target.anecdoteText.value
        evt.target.anecdoteText.value = ''
        addAnecdote(anecdoteContent)
        setNotification(`You created '${anecdoteContent}'`, 5)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createAnecdote}>
                <div><input name="anecdoteText" /></div>
                <button>create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addAnecdote,
    setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)

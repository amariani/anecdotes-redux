import React from 'react'
import { connect } from 'react-redux'
import { voteUp } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const votesAscending = (a, b) => b.votes - a.votes;

const AnecdoteList = ({ anecdotes, voteUp, setNotification }) => {

    const vote = ({ id, content }) => {
        voteUp(id)
        setNotification(`You voted '${content}'`, 5)
    }

    return anecdotes.map(anecdote =>
        <div key={anecdote.id} style={{ marginBottom: 10, padding: 8, border: "1px solid #ccc" }}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ anecdotes, filter }) => {
    if (!!filter) {
        const filtered = anecdotes.filter(a => {
            return a.content.search(filter) !== -1
        })
        return { anecdotes: filtered.sort(votesAscending) }
    }
    return { anecdotes: anecdotes.sort(votesAscending) }
}

const mapDispatchToProps = {
    voteUp,
    setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

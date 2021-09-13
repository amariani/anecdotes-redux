import axios from "axios";
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (anecdote) => {
    const response = await axios.post(baseUrl, { content: anecdote, votes: 0 })
    return response.data
}

const voteUp = async (id) => {
    const foundAnecdote = await axios.get(`${baseUrl}/${id}`);
    await axios.put(`${baseUrl}/${id}`, { ...foundAnecdote.data, votes: foundAnecdote.data.votes + 1 })
    return id
}

export default {
    getAll,
    createNew,
    voteUp
}
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertSong = payload => api.post(`/music`, payload)
export const getAllSongs = () => api.get(`/musics`)
export const updateSongById = (id, payload) => api.put(`/music/${id}`, payload)
export const getSongById = id => api.get(`/music/${id}`)
const apis = {
    insertSong,
    getAllSongs,
    updateSongById,
    getSongById

}

export default apis

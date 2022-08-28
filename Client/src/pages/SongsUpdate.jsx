import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import '../components/Header.css'
const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class SongsUpdate extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            name: '',
            url: '',
            artist:'',
            rating: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputUrl = async event => {
        const url = event.target.value
        this.setState({ url })
    }

    handleChangeInputArtist = async event => {
        const artist = event.target.value
        this.setState({ artist })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

   

    handleUpdateSong = async () => {
        const {  id,name, url, artist, rating } = this.state
        
        const payload = { name, url, artist, rating  }

        await api.updateSongById(id, payload).then(res => {
            window.alert(`Music updated successfully`)
            this.setState({
                name: '',
                url: '',
                artist:'',
                rating: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const song = await api.getSongById(id)

        this.setState({
            name: song.data.data.name,
            url : song.data.data.url,
            artist : song.data.data.artist,
            rating: song.data.data.rating,
           
        })
    }

    render() {
        const {  name, url, artist, rating } = this.state
        return (
            
            <Wrapper>
                <Title>Update Music</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>URL: </Label>
                <InputText
                    type="text"
                    value={url}
                    onChange={this.handleChangeInputUrl}
                />

                <Label>Artist: </Label>
                <InputText
                    type="text"
                    value={artist}
                    onChange={this.handleChangeInputArtist}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

 {}

                <Button onClick={this.handleUpdateSong}>Update Music</Button>
                <CancelButton href={'/songs/list'}>Cancel</CancelButton>
            </Wrapper>
            
        )
    }
}

export default SongsUpdate

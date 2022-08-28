import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import '../components/Header.css'
const Title = styled.h1.attrs({
    className: 'h1',
    
    
})`
color:white;
font-family:'Signika',sans-serif;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
       `

const Label = styled.label`
    margin: 5px;
    color:white;
    font-family:'Signika',sans-serif;

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

class SongsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

   

    handleIncludeSong = async () => {
        const { name, url, artist, rating } = this.state
        
        const payload = { name, url, artist, rating }

        await api.insertSong(payload).then(res => {
            window.alert(`Music inserted successfully`)
            this.setState({
                name: '',
                url: '',
                artist:'',
                rating: '',
            })
        })
    }

    render() {
        const  { name, url, artist, rating } = this.state
        return (
            <Wrapper>
            
                <Title >Create Music</Title>

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

                <Button onClick={this.handleIncludeSong}>Add Music</Button>
                <CancelButton href={'/songs/list'}>Cancel</CancelButton>
            
            </Wrapper>
        )
    }
}

export default SongsInsert

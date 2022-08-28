import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import '../components/Header.css'
import api from '../api'

import styled from 'styled-components'



const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

/* const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
` */

class UpdateSong extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/songs/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

/* class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
} */

class SongsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllSongs().then(songs => {
            this.setState({
                songs: songs.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { songs, isLoading } = this.state
        console.log('TCL: SongsList -> render -> songs', songs)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                //filterable: true,
            },
            
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Artist',
                accessor: 'artist',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                //filterable: true,
            },
            {
                Header: 'Audio',
                accessor: 'url',
                Cell: e => <audio src={e.value} type="audio/mpeg" controls />//<a href={e.value}> {e.value} </a>,
            },
           /*  {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteMovie id={props.original._id} />
                        </span>
                    )
                },
            }, */
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateSong id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!songs.length) {
            showTable = false
        }

        return (
            
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={songs}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
            
            
        )
    }
}

export default SongsList

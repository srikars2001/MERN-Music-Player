import React, { Component } from 'react'
import styled from 'styled-components'
//container
import Logo from './Logo'
import Links from './Links'
import "./Header.css"


class NavBar extends Component {
    render() {
        return (
            <div className="sidebar">
                
                    <Logo />
                    <Links />
                
            </div>
        )
    }
}

export default NavBar

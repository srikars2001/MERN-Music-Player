import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { SongsList, SongsInsert, SongsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        
        <div class="app">
         <Router>
            <NavBar />
            <Switch>
                <div class="player">
                <Route path="/songs/list" exact component={SongsList}/>   
                                          
                
                <Route path="/songs/create" exact component={SongsInsert}/>                    
                       
                <Route path="/songs/update/:id" exact component={SongsUpdate}/>
                    
                      
                </div>    
            
            </Switch>
        </Router>
        </div>
       
        
        
       
       
    )
}

export default App

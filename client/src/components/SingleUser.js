import React, { Component } from 'react'
import NewEntryForm from './NewEntryForm'
import {Link} from 'react-router-dom'

const getEntryFromServer = () => 
    fetch('/api/entry/')
    .then(response => response.json())  

export default class SingleUser extends Component {
    state = {
        entry: [],
        // user: [],
    }

    componentDidMount = () => {
        getEntryFromServer().
            then(entry => {
                this.setState({ entry })
            })
    }
    render () {
        return (
            <div style={{ color: "white" }}>
                Entry: <NewEntryForm userId={this.props.match.params.id}/>
                <div className="mainMedium-container">
                    {this.state.entry.map(entry => {
                        const { id } = this.props.match.params;

                        if(entry.user != id) {
                            return null
                        }
                        return(
                        <div>
                            <br/>
                            <br/>
                                
                            <Link to={`/${entry.id}/singleEntry/`}>
                                <div className="medium-container">
                                    <div className="medium-subtitle">{entry.title}</div>
                                    <div className="medium-title">{entry.medium}</div>
                                    <img src={entry.art} alt='tv series, movie, documentary' />
                                </div>
                            </Link>
                        </div>
                        )
                        })}
                </div>
            </div>
        )
    }
}

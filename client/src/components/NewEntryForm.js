import React from 'react';
import { Link } from 'react-router-dom'
// import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";


const getEntryFromServer = () => fetch('/api/entry/').then(response => response.json())

class NewEntryForm extends React.Component {
    state = {
        medium: "",
        title: "",
        art: "",
        user: 1
    }
    handleInput = (evnt) => {
        let newEntry = { ...this.state }
        newEntry[evnt.target.name] = evnt.target.value;
        this.setState(newEntry)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addNewEntry(this.state)
    }

    addNewEntry = (newEntry) =>
        fetch('/api/entry/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEntry)
            }).then(res => res.json())

    render = () => (
        <form onSubmit={this.handleSubmit} >
            <input type="text"
                name="medium"
                onChange={this.handleInput}
                value={this.state.medium}
                placeholder="Enter medium"
            />
            <br />
            <input type="text"
                name="title"
                onChange={this.handleInput}
                value={this.state.title}
                placeholder="Enter Title"
            />
            <br />
            <input type="text"
                name="art"
                onChange={this.handleInput}
                value={this.state.art}
                placeholder="Enter Link to Art"
            />
            <br />
            <input type="submit" value="Create Entry" />
        </form>
    )
}


export default class HomePage extends React.Component {

    state = {
        entry: [],
    }

    componentDidMount = () => {
        getEntryFromServer().
            then(entry => {
                this.setState({ entry })
            })
    }
    render = () => (
        <div style={{ color: "white" }}>
            Entry: <NewEntryForm />
            <div className="mainMedium-container">
                {this.state.entry.map(entry => (
                    <div key={entry.id}>
                        <Link to={`/${entry.id}/singleEntry/`}>
                            <div className="medium-container">
                                <div className="medium-subtitle">{entry.title}</div>
                                <div className="medium-title">{entry.medium}</div>
                                <img src={entry.art} alt='movie' />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )

}
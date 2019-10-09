import React from 'react';
import { Link } from 'react-router-dom'

class NewNoteForm extends React.Component {
    state = {
        name: "",
        comment: "",
        entry: `id`,
    }
    handleInput = (evnt) => {
        let newNote = { ...this.state }
        newNote[evnt.target.name] = evnt.target.value;
        this.setState(newNote)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addNewNote(this.state)
    }

    addNewNote = (newNote) =>
        fetch('/api/notes/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newNote)
            }).then(res => res.json())

    render = () => (
        <form onSubmit={this.handleSubmit} >
            <input type="text"
                name="name"
                onChange={this.handleInput}
                value={this.state.name}
                placeholder="Enter name"
            />
            <br />
        
            <textarea 
            rows="4" 
            cols="50" 
            type="text"
            name="comment" 
            onChange={this.handleInput}
            value={this.state.comment}
            form="usrform">
                Enter text here...</textarea>
            <br />
            <input type="submit" value="Create Note" />
        </form>
    )
}

export default class getSingleEntry extends React.Component {

    state = {
        singleEntry: {
            id: "",
            title: "",
            art: "",
            medium: ""
        },
    }

    getSingleEntry = () =>
        fetch(`/api/entry/${this.props.match.params.id}/`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify()

            }).then(res => res.json())

    componentDidMount = () => {
        this.getSingleEntry().
            then(singleEntry => {
                this.setState({ singleEntry })
            })
    }

    render() {
        return (
            //I'm using the render method to get all the recipes for one user
            <div>

            <div className="singleEntry-container">
                <div className="mediumSingleEntry-container">
                    <br />
                    <div className="medium-subtitleSingleEntry">{this.state.singleEntry.title}</div>
                    <div className="medium-titleSingleEntry">{this.state.singleEntry.medium}</div>
                    <img src={this.state.singleEntry.art} />
                </div>
            </div>
            <NewNoteForm />
            </div>
        )
    }
}


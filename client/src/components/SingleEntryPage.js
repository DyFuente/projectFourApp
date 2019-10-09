import React from 'react';
import { Link } from 'react-router-dom'

class NewNoteForm extends React.Component {
    state = {
        name: "",
        comment: "",
        entry: this.props.entryId
    }
    handleInput = (evnt) => {
        let newNote = { ...this.state }
        newNote[evnt.target.name] = evnt.target.value;
        this.setState(newNote)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addNewNote(this.state)
        this.setState({ name: "", comment: "" })
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
                cols="100"
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
            id: ""
        },
        notes: []
    }

    getSingleEntry = () =>
        fetch(`/api/entry/${this.props.match.params.id}/`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify()

            }).then(res => res.json())

    getNotesForSingleEntry = () =>
        fetch(`/api/notes/`,
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
        this.getNotesForSingleEntry().
            then(allNotes => {
                this.setState({ notes: allNotes })
            })
    }

    render() {
        return (
            //I'm using the render method to get all the recipes for one user
            <div>

                <div className="singleEntry-container">
                    <div className="mediumSingleEntry-container">
                        <br />
                        <div className="medium-titleSingleEntry">{this.state.singleEntry.title}</div>
                        <div className="medium-subtitleSingleEntry">{this.state.singleEntry.medium}</div>
                        <img src={this.state.singleEntry.art} />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <NewNoteForm
                    entryId={this.props.match.params.id}
                    getNotesForSingleEntry={this.getNotesForSingleEntry}
                />
                <br/>
                <div>
                    {this.state.notes.map(notes => (
                    //   if(entryId === entry)
                    //      return ()
                        <div>
                            <div className="notes-titleSingleEntry" >From: {notes.name}</div>
                            <div className="notes-subtitleSingleEntry" >{notes.comment}</div>
                            <br/>
                        </div>

                    ))}
                </div>
            </div>
        )
    }

}


import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";





class NewEntryForm extends React.Component {
    state = {
        medium: "",
        title: "",
        art: "",
        user: this.props.userId

    }
    handleInput = (evnt) => {
        let newEntry = { ...this.state }
        newEntry[evnt.target.name] = evnt.target.value;
        this.setState(newEntry)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault();
        console.log(this.state)
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
            <input type="submit" value="Create New Entry" />
        </form>
    )
}

export default NewEntryForm;
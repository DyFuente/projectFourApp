import React from 'react';
import { Link } from 'react-router-dom'

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
            <div className="singleEntry-container">
                <div className="mediumSingleEntry-container">
                    <br />
                    <div className="medium-subtitleSingleEntry">{this.state.singleEntry.title}</div>
                    <div className="medium-titleSingleEntry">{this.state.singleEntry.medium}</div>
                    <img src={this.state.singleEntry.art} />
                </div>
            </div>
        )
    }
}



import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeCount: 0,
            hateCount: 0
        }
    }

    countLikes = () => {
        this.setState({
            likeCount: this.state.likeCount + 1
        })
    }

    countHates = () => {
        this.setState({
            hateCount: this.state.hateCount + 1
        })
    }

    resetStatus = () => {
        this.setState({
            likeCount: 0,
            hateCount: 0
        })
    }

    render() {
        return (
            <div className="card">
                <img src="https://images.unsplash.com/photo-1590868553935-88acad332039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" className="card-img-top" alt="nice-view" />
                <div className="card-body">
                    <h5 className="card-title">Amazing landscape</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. At ipsa corporis ullam consequatur. Tempore laudantium id aperiam non ipsam similique! Inventore pariatur, odit voluptates quia dolore nam commodi fugiat odio.</p>
                    <button type="button" className="btn btn-success mr-2" onClick={this.countLikes}>LIKE {this.state.likeCount}</button>
                    <button type="button" className="btn btn-danger mr-2" onClick={this.countHates}>HATE {this.state.hateCount}</button>
                    <button type="button" className="btn btn-info" onClick={this.resetStatus}>RESET</button>
                </div>
            </div>
        )
    }
}

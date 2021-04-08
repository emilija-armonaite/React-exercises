import React, { Component } from 'react'

export default class CardTask extends Component {

    constructor() {
        super();
        this.state = {
            btn: "Mark as DONE",
            style: "btn btn-danger",
        }
    }

    changeBtn = () => {
        return this.state.btn === "Done!" ?
            this.setState({
                header: "Task is not done",
                btn: "Mark as done!"
            }) :
            this.setState({
                header: "Task is done!",
                btn: "Done!"
            });
    }

    changeBtnColor = () => {
        return this.state.btn === "Done!" ? "btn btn-success" : "btn btn-danger";
    }

    changeHeaderColor = () => {
        return this.state.header === "Task is done!" ? "text-success" : "text-danger";
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className={this.changeHeaderColor()}>{this.state.header}</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. At ipsa corporis ullam consequatur. Tempore laudantium id aperiam non ipsam similique! Inventore pariatur, odit voluptates quia dolore nam commodi fugiat odio.</p>
                    <button type="button" className={this.changeBtnColor()} onClick={this.changeBtn}>{this.state.btn}</button>
                </div>
            </div>
        )
    }
}

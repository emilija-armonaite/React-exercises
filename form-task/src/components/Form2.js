import React, { Component } from 'react'
import List from './List';

export default class Form2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    name: "Vardenis",
                    lastname: "Pavardenis",
                    id: Date.now(),
                }, {
                    name: "Vardeniauskas",
                    lastname: "Pavardeniauskas",
                    id: Date.now() + 1,
                },
            ],
            name: "",
            lastname: "",
            btn: "Submit",
            updateID: "",
        };
    }

    myChangeForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    mySubmitForm = (e) => {
        e.preventDefault();
        if (this.state.btn === "Submit") {
            const data = [
                ...this.state.users, {
                    id: Date.now(),
                    name: this.state.name,
                    lastname: this.state.lastname,
                },
            ];
            console.log(data);
            this.setState({
                users: data,
                name: "",
                lastname: "",
            });
        } else {
            const data = [...this.state.users];
            const num = this.state.users.findIndex(
                (user) => user.id === this.state.updateID
            );
            data[num] = {
                ...data[num],
                name: this.state.name,
                lastname: this.state.lastname,
            };
            this.setState({
                users: data,
                btn: "Submit",
                name: "",
                lastname: "",
            });
        }
        ;
    }

    deletePerson = (id) => {
        const data = this.state.users.filter((user) => user.id !== id);
        this.setState({
            users: data,
        });
    };

    editPerson = (user) => {
        this.setState({
            name: user.name,
            lastname: user.lastname,
            btn: "Update",
            updateID: user.id,
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <form className="border p-3" onSubmit={this.mySubmitForm}>
                            <h3 className="mb-3">Registration</h3>
                            <div className="form-group">
                                <label for="name">First Name</label>
                                <input type="text" placeholder="Enter firstname" className="mx-3" name="name" value={this.state.name} onChange={this.myChangeForm} />
                            </div>
                            <div className="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" placeholder="Enter lastname" className="mx-3" name="lastname" value={this.state.lastname} onChange={this.myChangeForm} />
                            </div>
                            <button type="submit" className="btn btn-primary">{this.state.btn}</button>
                        </form>
                    </div>
                </div>
                <div>
                    {this.state.users.length > 0 && (
                        <List
                            users={this.state.users}
                            deletePerson={this.deletePerson}
                            editPerson={this.editPerson} />
                    )}
                </div>
            </div>
        );
    }
}

import React, { Component } from "react";

import personService from "./services/person.service";


export default class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDoB = this.onChangeDoB.bind(this);
        this.onChangeComments = this.onChangeComments.bind(this);

        this.state = {
            id: null,
            name: "",
            surname: "",
            email: "",
            telephone: "",
            gender: "",
            dob: "",
            comments: "",
            posted: false,
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeSurname(e) {
        this.setState({
            surname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeTelephone(e) {
        this.setState({
            telephone: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeDoB(e) {
        this.setState({
            dob: e.target.value
        });
    }
    onChangeComments(e) {
        this.setState({
            comments: e.target.value
        });
    }

    savePerson() {
        var data = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            telephone: this.state.telephone,
            gender: this.state.gender,
            dob: this.state.dob,
            comments: this.state.comments
        };
        personService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    surname: response.data.surname,
                    email: response.data.email,
                    telephone: response.data.telephone,
                    gender: response.data.gender,
                    dob: response.data.dob,
                    comments: response.data.comments,

                    posted: true

                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    newPerson() {
        this.setState({
            id: null,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            telephone: this.state.telephone,
            gender: this.state.gender,
            dob: this.state.dob,
            comments: this.state.comments,

            posted: false
        })
    }

    render() {
        return (
            <div className="submit-form" >
                {
                    this.state.submitted ? (
                        <div>
                            <h4>You submitted successfully!</h4>
                            <button className="btn btn-success" onClick={this.newPerson}>
                                Add
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    value={this.state.Name}
                                    onChange={this.onChangeName}
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Surname">Surname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Surname"
                                    required
                                    value={this.state.Surname}
                                    onChange={this.onChangeSurname}
                                    name="surname"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Email"
                                    required
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    name="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Telephone">Telephone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Telephone"
                                    required
                                    value={this.state.telephone}
                                    onChange={this.onChangeTelephone}
                                    name="telephone"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Gender">Gender</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Gender"
                                    required
                                    value={this.state.Gender}
                                    onChange={this.onChangeGender}
                                    name="gender"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob">Date of Birth</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dob"
                                    required
                                    value={this.state.dob}
                                    onChange={this.onChangeDoB}
                                    name="dob"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Comments">Comments</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Comments"
                                    required
                                    value={this.state.Comments}
                                    onChange={this.onChangeComments}
                                    name="comments"
                                />
                            </div>
                            

                            <button onClick={this.savePerson} className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    )
                }
            </div>
        );
    }
}



import React from 'react'
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa'

export default function List(props) {
    return (
        <div className="border p-3 mt-2">
            <h3>Current list</h3>
            {props.users.map((user) => {
                return (
                    <div className="row">
                        <div className="col my-3 mx-2">
                            <span className="p-3 text-justify">{user.name}</span>
                            <span className="p-3 text-justify">{user.lastname}</span>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger mx-2" onClick={() =>
                                props.deletePerson(user.id)}>Delete <FaTrashAlt /></button>
                            <button className="btn btn-info" onClick={() =>
                                props.editPerson(user)}>Edit <FaUserEdit /></button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

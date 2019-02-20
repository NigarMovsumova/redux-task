import React from "react";
import { connect } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import { formUsersComponent } from "../actions";
import axios from "axios";

class UsersComponent extends React.Component {

    async componentDidMount() {
        const users = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.props.formUsersComponent(users.data);
    }

    createContent = () => {
        return (
            <table className="ui inverted grey table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>

                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    };

    render() {
        if (this.props.users === null) {
            return <LoadingComponent />;
        }
        return (
            <div>
                <br/>
                <h2 className="ui header">Users List Component</h2>
                {this.createContent()}
            </div>
        );
    }
}

export default connect((state)=>({users:state.users}), { formUsersComponent })(UsersComponent);
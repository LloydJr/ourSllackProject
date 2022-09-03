import React from 'react';
import UserService from './Pages/UserService';

export default class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Username </td>
                            <td> User Password </td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                     <td> {user.userName}</td>
                                     <td> {user.password}</td>
                                 </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}


import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserData from '../components/user_data.jsx'
import { fetchUsers } from '../actions/users_action.jsx';

class UsersList extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUsers = () => {
        return _.map(this.props.users, user => {
            return <UserData key={Math.random()} username={user.name} userstatus={user.status} />
        })
    }

    render() {
        return (
            <div>
                {this.renderUsers()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, { fetchUsers })(UsersList);
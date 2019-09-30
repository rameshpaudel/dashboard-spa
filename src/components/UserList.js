import React from "react"
import { Link } from 'react-router-dom'

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: [],
            isLoading: true
        }
    }

    fetchUserList = async () => {
        var netReq = await fetch(`https://reqres.in/api/users?page=2`)
        var response = await netReq.json();
        console.log('response', response)
        this.setState({
            response: response.data
        }, () => {
            setTimeout(() => {
                this.setState({ isLoading: false })
            }, 500)
        })
    }

    generateUserList = () => {
        return this.state.response.map((value, index) => {
            return (<div key={value.id} className="column  is-one-quarter">
                <img src={value.avatar} alt="user image" />
                <h3>{value.first_name} {value.last_name}</h3>
                <p>{value.email}</p>
                <Link to={`/single/${value.id}`}>Go to user</Link>
            </div>)
        })
    }
    render() {
        return (
            <div>
                <br />
                <button onClick={this.fetchUserList} style={{ padding: 10 }}>Fetch All Users</button>
                <br />
                <div className="columns">

                    {this.state.isLoading ? (
                        <div className="column">
                            <h1>Loading this generateUserList</h1>
                        </div>
                    ) : this.generateUserList()}
                </div>
            </div>
        )
    }
}
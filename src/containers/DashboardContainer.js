import React from 'react';
import Card from '../components/Card';
import UserList from '../components/UserList';

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>Dashboard Page</h1>
                
                <div className="columns">
                    <UserList />
                    
                    
                </div>
            </div>
        )
    }
}
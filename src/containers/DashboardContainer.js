import React from 'react';
import Card from '../components/Card';

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
                    <div className="column is-one-quarter">
                        <Card />
                    </div>
                    <div className="column is-one-quarter">
                        <Card />
                    </div>
                    <div className="column is-one-quarter">
                        <Card />
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
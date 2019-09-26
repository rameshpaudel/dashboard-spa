import React from 'react';
import Card from '../components/Card';
import NetworkImage from '../components/Image';

const list = require('../data/list.json')
export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {

        }
    }
    componentDidMount(){
        this.myRef.current.children[0].innerHTML = "Testing"
        console.log(this.history)
    }
    render() {
        return (
            <div ref={this.myRef}>

                
                <h1>Home Page</h1>
                {list.map((value, index) => {
                    return (
                        <p>{value.name}</p>
                    )
                })}
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

                <div>
                    <NetworkImage />
                </div>
            </div>
        )
    }
}
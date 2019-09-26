import React from 'react';
import Toggler from '../components/Toggler'

export default class ServicesContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    
    render(){
        return (
            <div>
                <h1>Services Page</h1>
                <Toggler/>
            </div>
        )
    }
}
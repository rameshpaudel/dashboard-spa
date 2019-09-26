import React, { Component } from 'react'

export default class GeoLocator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            networkStatus: "",
            response: [],
            request: ''
        }
    }


    onInputHandle = (event) => {
        
        this.setState({ request: event.target.value })
    }
    // 
    //Get the network info
    fetchFromNetwork = () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `http://api.geonames.org/searchJSON?q=${this.state.request}&maxRows=10&username=test`);
        xhr.send();
    
        xhr.onload = (event) => {


            console.log("The response from network", xhr.responseText)
            const parsedResponse = JSON.parse(xhr.responseText);

            this.setState({ isLoading: false, networkStatus: xhr.status, response: parsedResponse })
            console.log("The response from dynamic ready State", xhr.readyState, " on the network", xhr.responseText)
        }
    }

    render() {
        //Destructing the state and accessing the value directly as a constant
        const { isLoading, networkStatus, response } = this.state;

        return (
            <div>
                <h3>{networkStatus}</h3>
                <input onChange={this.onInputHandle} placeholder="search datas" />
                <button onClick={this.fetchFromNetwork}>Load From Network</button>
                {isLoading ? (
                    <div>
                        <h1>Loading....</h1>
                        <p>This might take a while. Be patient</p>
                    </div>
                ) : (
                        <div className="columns">
                            {JSON.stringify(response)}
                        </div>
                    )}
            </div>
        );
    }
}

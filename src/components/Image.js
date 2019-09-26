import React, { Component } from 'react'

export default class NetworkImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            networkStatus: "",
            response: []
        }
    }



    //Get the network info
    fetchFromNetwork = () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/test.json");
        xhr.send();
        console.log("XHR", xhr)
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
                <button onClick={this.fetchFromNetwork  }>Load From Network</button>
                {isLoading ? (
                    <div>
                        <h1>Loading....</h1>
                        <p>This might take a while. Be patient</p>
                    </div>
                ) : (
                        <div className="columns">
                            {response.map((value, index) => {
                                return (
                                    <div>
                                        <img src="https://placeimg.com/200/200/nature" />
                                        <p>{value.name}</p>
                                        <p>{value.age}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )}
            </div>
        );
    }
}

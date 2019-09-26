import React from 'react'

export default class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    onClickHandler = () => {
        this.setState((state) => ({
            isVisible: !state.isVisible
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler} >Here to show data{" "}{" "} &nbsp; 
                {this.state.isVisible ? (
                    <i>X</i>
                ) : (<i>Y</i>)}</button>
                {this.state.isVisible && (<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni officiis harum perferendis optio provident rerum autem ut consequatur officia quod.</p>)}

            </div>
        )
    }
}
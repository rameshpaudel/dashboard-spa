import React from 'react';
import Card from '../components/Card';

export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.state = {

        }
    }

    componentDidMount(){
        this.emailRef.current.focus();
    }
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form style={{width: "600px", margin: "0 auto"}}>
                    <div className="field">
                        <div className="control">
                            <input ref={this.emailRef} className="input is-primary" type="email" placeholder="your@mail.com" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary" type="password" placeholder="Input Password" />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button type="submit">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
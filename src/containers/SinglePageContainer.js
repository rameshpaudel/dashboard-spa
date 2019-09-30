import React from 'react';

export default class SinglePageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {
                id: "",
                email: "",
                first_name: "",
                last_name: "",
                avatar: ""
            },
            isLoading: true
        }
    }

    componentDidMount() {
        this.fetchUser(this.props.match.params.id)
    }

    fetchUser = async (id) => {

        var netReq = await fetch(`https://reqres.in/api/users/${id}`)
        var response = await netReq.json()
        this.setState({
            response: { ...response.data }
        }, () => {
            setTimeout(() => {
                this.setState({ isLoading: false })
            }, 500)
        })
    }

    generateUserInformation = () => {
        const { avatar, first_name, last_name, email } = this.state.response
        return (
            <div>
                <img src={avatar} alt={first_name} />
                <h3>Name: {first_name} {last_name}</h3>
                <h4>email: {email}</h4>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h1>Single Page</h1>

                {this.isLoading ? (
                    <div>
                        <h1>Loading user info please be patient</h1>
                    </div>
                ) : this.generateUserInformation()}
            </div>
        )
    }
}
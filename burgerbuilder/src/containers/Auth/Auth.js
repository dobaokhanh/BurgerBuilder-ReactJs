import React, { Component } from 'react';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email',
                },
                value: '',
            }
        }
    }

    render() {
        return (
            <div>
                <form>

                </form>
            </div>
        )
    }
}

export default Auth;
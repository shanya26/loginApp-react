import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                    <img src="../src/img/img-01.png" alt="IMG"/>
                </div>

                <form className="login100-form validate-form" name="form" onSubmit={this.handleSubmit}>
                <span className="login100-form-title">
                        Login
                    </span>
                <div className="wrap-input100 validate-input" data-validate = ""> 
                        <input className="input100" type="text" name="text" name="username" placeholder="User Name" onChange={this.handleChange} value={username} />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className="wrap-input100 validate-input" data-validate = "Password is required">
                        <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>
                <div className="text-center p-t-136">
                         
                             <Link to="/register" className="btn btn-link">Register<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></Link>
                            
                         
                    </div>
                </form>
               
            </div>
        </div>
    </div>
                
                
          
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
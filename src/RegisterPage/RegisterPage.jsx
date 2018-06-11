import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email:'',
                gender:'',
                country:''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    debugger;
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password && user.gender && user.email && user.country) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
         <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login80">
                 <span className="login100-form-title">
                        Register
                    </span>
               <form className="col-md-12" name="form" onSubmit={this.handleSubmit}>
                <div className="pull-left col-xs-6">
                  <div className="wrap-input100 validate-input" data-validate = "Username is required">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="input80" name="username" value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }   
                    </div>

                    <div className="wrap-input100 validate-input" data-validate = "Password is required">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="input80" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }  
                    </div>   

                  <div className="wrap-input100 validate-input" data-validate ="First name is required"> 
                 <label htmlFor="firstName">First Name</label>
                  <input type="text" className="input80" name="firstName" value={user.firstName} onChange={this.handleChange} /> 
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className="wrap-input100 validate-input" data-validate = "Lastname is required">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="input80" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }   
                    </div>
                    
                   
                </div>
                
               <div className="pull-right col-xs-6">
                <div className="wrap-input100 validate-input" data-validate ="Email name is required"> 
                 <label htmlFor="email">Email</label>
                  <input type="text" className="input80" name="email" value={user.email} onChange={this.handleChange} /> 
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className="wrap-input100 validate-input" data-validate = "Gender is required">
                        <label htmlFor="gender">Gender</label>
                        <div className="form-check">
                            <input className="form-check-input" name="gender" type="radio" value="male" checked={user.gender === 'male'} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="gender">Male</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" name="gender" type="radio" value="female" checked={user.gender === 'female'} onChange={this.handleChange} />
                            <label className="form-check-label" htmlFor="gender">Female</label>
                        </div>
                        
                        {submitted && !user.gender &&
                            <div className="help-block">Gender is required</div>
                        }   
                    </div>
                    <div className="wrap-input100 validate-input" data-validate = "Country is required">
                        <label htmlFor="country">Country</label>
                        <select onChange={this.handleChange} className="input80" name="country" value={user.country}>
                            <option>--Select--</option>
                            <option>--India--</option>
                        </select>                        
                        {submitted && !user.country &&
                            <div className="help-block">Country is required</div>
                        }   
                    </div>
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Register
                        </button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                          <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                
                </form>
               
            </div>
        </div>
         
    </div>
           
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RoleTypeCodes } from '../_constants';
import { userActions } from '../_actions';

const RegisterPage = (props) => {
    const { registering, register } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user_role_id, setUser_role_id] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'firstName') setFirstName(value);
        else if (name === 'lastName') setLastName(value);
        else if (name === 'username') setUsername(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'user_role_id') setUser_role_id(value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        if (firstName && lastName && username && password && user_role_id) {
            const data = {
                firstName,
                lastName,
                username,
                password,
                user_role_id
            }
            register(data);
        }
    }

    return (
        <div className="row login-container">
            <div className="col-md-6 login-img">

            </div>
            <div className="col-md-6 login-box">
            <h2>Register</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className={'form-group' + (submitted && !firstName ? ' has-error' : '')}>
                    <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={firstName} onChange={handleChange} />
                        {submitted && !firstName &&
                        <div className="help-block">First Name is required</div>
                    }
                </div>
                    <div className={'form-group' + (submitted && !lastName ? ' has-error' : '')}>
                    <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={lastName} onChange={handleChange} />
                        {submitted && !lastName &&
                        <div className="help-block">Last Name is required</div>
                    }
                </div>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={handleChange} />
                        {submitted && !username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={handleChange} />
                        {submitted && !password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                    <div className={'form-group' + (submitted && !user_role_id ? ' has-error' : '')}>
                    <label htmlFor="password"></label>
                        <select className="form-control" name="user_role_id" value={user_role_id} onChange={handleChange}>
                        
                            <option value="0">
                            Select Role
                            </option>
                                

                        {
                                RoleTypeCodes?.map((option, index) => {

                                return(
                                    
                                    <option value={option.id} key={index}>
                                        {option.value}
                                    </option>

                                    )
                            })

                        }
                    </select>
                        {submitted && !user_role_id &&
                        <div className="help-block">User role is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Register</button>
                    {registering && 
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    }
                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
            </div> 
        </div>
    );
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
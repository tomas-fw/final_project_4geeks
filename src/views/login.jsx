import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Login = props => {
    const {store,actions} = useContext(Context)
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h1>Login</h1>

                        <form onSubmit={e =>actions.login(e,props.history,4)}>                            
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email"
                                name='email'
                                onChange={actions.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                name='password' 
                                onChange={actions.handleChange}/>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </form>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Login
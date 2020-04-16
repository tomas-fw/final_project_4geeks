import React from 'react'

const Register = props => {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h1>Register</h1>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">User Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Register
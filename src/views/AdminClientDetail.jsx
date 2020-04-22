import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'


const ClientDetail =props=>{
    console.log(props.location.pathname)
    const {store,actions} = useContext(Context)
    useEffect(() => {
        actions.adminLoadClients(props.location.pathname);
    }, [])
    return(
        <>
        {
            !!store.clients &&
            <>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">

                                <h1>{store.clients[0].name}</h1>
                                <form onSubmit={(e) => actions.changeActiveStatus(e, props.location.pathname)}>
                                    <div className="form-check" >
                                        <input className="form-check-input" type="radio" name="is_active" id="exampleRadios1" value={!store.clients[0].is_active} onChange={actions.handleChange} />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            Active
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="is_active" id="exampleRadios2" value={!store.clients[0].is_active}
                                            onChange={actions.handleChange} />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            Inactive
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Change active status</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </>
        }   
        </>
    )
}

export default ClientDetail
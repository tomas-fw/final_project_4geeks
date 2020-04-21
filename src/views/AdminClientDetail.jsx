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
            !!store.clients && <h1>{store.clients[0].name}</h1>
        }   
        </>
    )
}

export default ClientDetail
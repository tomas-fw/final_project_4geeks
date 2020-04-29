import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'


const ChatNutritionist = props => {
    const { store, actions } = useContext(Context)
    const { id,plan_id } = useParams();
    useEffect(() => {
        actions.loadChatConversation(2, plan_id);
        actions.loadPlans(id, plan_id);
    }, [])

    return (
        <>
            {!!store.currentUser && !!store.chat && store.chat.length > 0 ?
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-4">
                            <h1>{store.currentUser.user.role.id == 4 ? 'Chat con tu Nutricionista' : 'Chat con tu Cliente'}</h1>                            
                            <h3>{store.currentUser.user.role.id === 4 ? store.chat[0].nutritionist_name + ' '+ store.chat[0].nutritionist_lastname : store.chat[0].client_name+ ' '+store.chat[0].client_lastname}</h3>


                            {
                                !!store.chat ? store.chat.map((elem, index) => {
                                    return (
                                        <div className="card mt-2">
                                            <div className="card-body">
                                                <p>{elem.comment}</p>
                                            </div>
                                        </div>
                                    )
                                })
                                    :
                                    'No tienes comentarios en este plan'
                            }


                        </div>
                    </div>
                </div>

                :
                <h1>No tienes conversaciones en este plan, quieres iniciar una?</h1>

            }
            {
                !!store.currentUser && store.currentUser.user.role.id == 4 ?

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-4">


                                <form onSubmit={(e) => actions.clientSendMessage(e, plan_id,4,2,
                                    store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.client_email,
                                    store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_email,
                                    )}>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Envia tu mensaje:</label>
                                        <textarea autoFocus rows='3' className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                            name='comment'
                                            onChange={actions.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Enviar mensaje al Nutricionista</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-4">


                                <form onSubmit={(e) => actions.clientSendMessage(e, plan_id,2,4,
                                    store.plan[0].client_email,
                                    store.plan[0].nutritionist_email
                                    )}>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Envia tu mensaje:</label>
                                        <textarea autoFocus rows='3' className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                            name='comment'
                                            onChange={actions.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Enviar mensaje al Cliente</button>
                                </form>

                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default ChatNutritionist
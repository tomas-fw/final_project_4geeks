import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useParams, Link } from 'react-router-dom'
/* RESPONSIVE LISTO*/

const ChatTrainer = props => {
    const { store, actions } = useContext(Context)
    const { id, plan_id } = useParams();
    useEffect(() => {
        actions.loadChatConversation(3, plan_id);
        actions.loadPlans(id, plan_id);
    }, [])

    return (
        <>
            {!!store.currentUser && !!store.chat && store.chat.length > 0 ?
                <div className="container">
                    <div className="row">
                        <Link to='/profile/client/health-team/' type="button" class="btn btn-danger mt-4 mr-5 mb-3">Volver a mi equipo</Link>
                        <h1 className="mt-3 mb-4">{store.currentUser.user.role.id == 4 ? 'Chat con tu Entrenador' : 'Chat con tu Cliente'}</h1>
                        <div className="col-md-6 col-xs-6 offset-md-4">
                            <h3>{store.currentUser.user.role.id === 4 ? store.chat[0].trainer_name + ' ' + store.chat[0].trainer_lastname : store.chat[0].client_name + ' ' + store.chat[0].client_lastname}</h3>


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
                <h1 className="text-center">No tienes conversaciones en este plan, quieres iniciar una?</h1>

            }
            {
                !!store.currentUser && store.currentUser.user.role.id == 4 ?

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-6 offset-md-4">


                                <form onSubmit={(e) => actions.clientSendMessage(e, plan_id, 4, 3,
                                    store.plan[0].client_email,
                                    store.plan[0].trainer_email
                                )}>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Envia tu mensaje:</label>
                                        <textarea autoFocus rows='3' className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                            name='comment'
                                            onChange={actions.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-warning">Enviar mensaje al Entrenador</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-6 offset-md-4">


                                <form onSubmit={(e) => actions.clientSendMessage(e, plan_id, 3, 4,
                                    store.plan[0].client_email,
                                    store.plan[0].trainer_email
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

export default ChatTrainer
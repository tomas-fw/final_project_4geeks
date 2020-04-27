import React, { useEffect, useContext } from 'react';
import ContactCard from './ContactCard';
import { Context } from '../store/appContext';

const Nutritionists = props => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.adminLoadProfesionals('/admin/profesional')
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <h1 className="text-center">Nutritionists</h1>
                    <ul className="list-group pull-down" id="contact-list">
                        {
                            !!store.profesionals && !!store.profesionals.nutritionists && store.profesionals.nutritionists.length > 0 ?
                                store.profesionals.nutritionists.filter((elem) => elem.is_active).map((elem, index) => {
                                    return (
                                        <ContactCard professional={elem} />
                                    )
                                })
                                :
                                <li className="alert alert-warning" role="alert">
                                    {store.error}
                                    There are no active nutritionists at the moment :(
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nutritionists;
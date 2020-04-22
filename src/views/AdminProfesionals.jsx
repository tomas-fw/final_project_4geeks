import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom'

const AdminProfesionals = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadProfesionals(props.location.pathname);
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-1">
                        <h1>Trainers</h1>
                        {
                            !!store.profesionals && !!store.profesionals.trainers && store.profesionals.trainers.length > 0 ?
                                store.profesionals.trainers.map((elem, index) => {
                                    return (
                                        <ul className="list-group">
                                            <Link to={'/admin/profesional/' + elem.role_id + '/' + elem.id} className={"list-group-item mt-1 " + (elem.is_active == true ? 'active': '')}>
                                                ID : {elem.id} &nbsp;
                                        Name : {elem.name + ' ' + elem.lastname}&nbsp;
                                        Total Plans: {elem.all_plans.length} &nbsp;

                                            </Link>
                                        </ul>
                                    )
                                })
                                :
                                <div className="alert alert-warning" role="alert">
                                    {store.error}
                                You have no trainers in your database :(
                            </div>
                        }
                    </div>
                    <div className="col-md-4  mt-1">
                        <h1>Nutritionists</h1>

                        {
                            !!store.profesionals && !!store.profesionals.nutritionists && store.profesionals.nutritionists.length > 0 ?
                                store.profesionals.nutritionists.map((elem, index) => {
                                    return (
                                        <>
                                            <ul className="list-group">
                                            <Link to={'/admin/profesional/' + elem.role_id + '/' + elem.id} className={"list-group-item mt-1 " + (elem.is_active == true ? 'active': '')}>
                                                    ID : {elem.id} &nbsp;
                                            Name : {elem.name + ' ' + elem.lastname}&nbsp;
                                            Total Plans: {elem.all_plans.length} &nbsp;



                                                </Link>
                                            </ul>
                                        </>
                                    )
                                })
                                :
                                <div className="alert alert-warning" role="alert">
                                    {store.error}
                                    You have no nutritionists in your database :(
                                </div>
                        }
                    </div>
                    <div className="col-md-4  mt-1">
                        <h1>Search Specific Profesional</h1>
                        <form >
                        <input list="profesionals" value="" className="custom-select custom-select-sm"/>
                            <datalist id="profesionals">
                                {
                                    !!store.profesionals && !!store.profesionals.nutritionists ?
                                        store.profesionals.nutritionists.map((elem, index) => {
                                            return (
                                                <>
                                                    <option value={+ elem.id + ' ' + elem.name + ' ' + (elem.role_id == 2 ? 'Nutritionist' : 'Trainer')} />
                                                </>
                                            )
                                        })
                                        :
                                        <div className="alert alert-warning" role="alert">
                                            {store.error}
                                        You have no nutritionists in your database :(
                                    </div>
                                }
                                {
                                    !!store.profesionals && !!store.profesionals.trainers ?
                                        store.profesionals.trainers.map((elem, index) => {
                                            return (
                                                <>
                                                    <option value={+ elem.id + ' ' + elem.name + ' ' + (elem.role_id == 2 ? 'Nutritionist' : 'Trainer')} />
                                                </>
                                            )
                                        })
                                        :
                                        <div className="alert alert-warning" role="alert">
                                            {store.error}
                                        You have no nutritionists in your database :(
                                        </div>

                                }

                            </datalist>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminProfesionals
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://127.0.0.1:5000',
            username: null,
            currentUser: null,
            isAuthenticated: false,
            email: null,
            password: null,
            name: null,
            lastname: null,
            error: null,
            avatar: null,
            role: null,
            clients: null,
            id_client: null,
            objective: null,
            actividad_fisica: null,
            alcohol: null,
            alergias: null,
            altura: null,
            ansiedad: null,
            apetito: null,
            ayuno: null,
            cintura: null,
            ciruguias: null,
            digestion: null,
            embarazo: null,
            enfermedad: null,
            lesiones: null,
            medicamentos: null,
            orina: null,
            peso: null,
            sintomas: null,
            suplementos: null,
            tabaco: null,
            specialties: null,
            age: null,
            profesional_title: null,
            nutritionist_title_validation: null,
            background: null,
            description: null,
            gender: null,
            profesionals: null,
            is_active: null,
            trainer_email: null,
            nutritionist_email: null,
            comment: null,
            plan:null



        },
        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            handleChangeFiles: e => {
                setStore({
                    [e.target.name]: e.target.files[0]
                })
            },
            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuthenticated: sessionStorage.getItem('isAuthenticated')
                    })
                }
            },
            login: (e, history, role_id, re_route) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/login/' + role_id, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                error: null,
                                role: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push('/'+re_route)
                        }
                    })
            },
            admin_login: (e, history) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/admin/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: store.username,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                username: null,
                                email: null,
                                password: null,
                                error: null,
                                role: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push('/admin/profile')
                        }
                    })
            },
            adminLoadClients: (id = '') => {
                const store = getStore()
                fetch(store.path + id, {
                    method: 'GET',
                    headers: {
                        "Content-type": 'aplication/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                error: null,
                                clients: data
                            })
                        }
                    })
            },
            loadPlans: (id_client = '', id_plan='') => {
                const store = getStore()
                fetch(store.path + '/client/plan/'+id_client+'/'+id_plan, {
                    method: 'GET',
                    headers: {
                        "Content-type": 'aplication/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                error: null,
                                plan: data
                            })
                        }
                    })
            },
            adminLoadProfesionals: (role_id = '', id = '') => {
                const store = getStore()
                fetch(store.path + role_id + id, {
                    method: 'GET',
                    headers: {
                        "Content-type": 'aplication/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else if (!!role_id) {
                            setStore({
                                error: null,
                                profesionals: data
                            })

                        }
                        // else if(role_id == 2){
                        //     setStore({
                        //         profesionals:null,
                        //         error:null,
                        //         trainers:null,
                        //         nutritionists:data,
                        //         profesional_detail:null
                        //     })
                        // }else if(role_id == 3){
                        //     setStore({
                        //         profesionals:null,
                        //         error:null,
                        //         trainers:data,
                        //         nutritionists:null,
                        //         profesional_detail:null
                        //     })
                        // }
                        // else if(!!role_id && !!id){
                        //     setStore({
                        //         profesionals:null,
                        //         error:null,
                        //         trainers:null,
                        //         nutritionists:null,
                        //         profesional_detail:data
                        //     })
                        // }                                                
                        // else {
                        //     setStore({
                        //         error:null,
                        //         clients:data
                        //     })
                        // }
                    })
            },
            changeActiveStatus: (url) => {
                const store = getStore();
                let formData = new FormData()
                formData.append('active', store.is_active)

                fetch(store.path + url, {
                    method: "PUT",
                    body: formData
                })
                    .then(resp => resp.json())
            },
            register_client: (e, history) => {
                e.preventDefault();
                const store = getStore();
                let formData = new FormData()
                formData.append('email', store.email)
                formData.append('password', store.password)
                formData.append('name', store.name)
                formData.append('lastname', store.lastname)
                formData.append('avatar', store.avatar)
                formData.append('gender', store.gender)

                fetch(store.path + '/register/client', {
                    method: 'POST',
                    body: formData
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                photo: null,
                                error: null,
                                role: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push('/profile')
                        }
                    })
            },
            register_profesional: (e, role_id, history) => {
                e.preventDefault();
                const store = getStore();
                let formData = new FormData()
                formData.append('email', store.email)
                formData.append('password', store.password)
                formData.append('name', store.name)
                formData.append('lastname', store.lastname)
                formData.append('avatar', store.avatar)
                formData.append('background', store.background)
                formData.append('title', store.profesional_title)
                formData.append('title_validation', store.nutritionist_title_validation)
                formData.append('specialties', store.specialties)
                formData.append('description', store.description)
                formData.append('gender', store.gender)
                formData.append('age', store.age)
                fetch(store.path + '/register/profesional/' + role_id, {
                    method: 'POST',
                    body: formData
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                avatar: null,
                                error: null,
                                role: null,
                                specialties: null,
                                age: null,
                                profesional_title: null,
                                nutritionist_title_validation: null,
                                background: null,
                                description: null,
                                gender: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push('/profile/professional')
                        }
                    })
            },
            logout: (history) => {
                setStore({
                    currentUser: null,
                    isAuthenticated: false,
                });
                sessionStorage.removeItem('currentUser');
                sessionStorage.removeItem('isAuthenticated');
                history.push('/')
            },
            createPlan: (e, client_id, client_mail, trainer_mail, nutritionist_mail, history) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/client/plan/' + client_id + '/' + client_mail + '/' + trainer_mail + '/' + nutritionist_mail, {
                    method: 'POST',
                    body: JSON.stringify({
                        objective: store.objective,
                        client_id: store.currentUser.user.client_id,
                        client_email: store.currentUser.user.email,
                        trainer_email: store.trainer_email,
                        nutritionist_email: store.nutritionist_email,
                        actividad_fisica: store.actividad_fisica,
                        alcohol: store.alcohol,
                        alergias: store.alergias,
                        altura: store.altura,
                        ansiedad: store.ansiedad,
                        apetito: store.apetito,
                        ayunos: store.ayuno,
                        cintura: store.cintura,
                        ciruguias: store.ciruguias,
                        comment: store.description,
                        digestion: store.digestion,
                        embarazo: store.embarazo,
                        enfermedades: store.enfermedad,
                        lesiones: store.lesiones,
                        medicamento: store.medicamentos,
                        orina: store.orina,
                        peso: store.peso,
                        sintomas: store.sintomas,
                        suplementos: store.suplementos,
                        tabaco: store.tabaco,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                objective: null,
                                trainer_email: null,
                                nutritionist_email: null,
                                actividad_fisica: null,
                                alcohol: null,
                                alergias: null,
                                altura: null,
                                ansiedad: null,
                                apetito: null,
                                ayunos: null,
                                cintura: null,
                                ciruguias: null,
                                comment: null,
                                digestion: null,
                                embarazo: null,
                                enfermedades: null,
                                lesiones: null,
                                medicamento: null,
                                orina: null,
                                peso: null,
                                sintomas: null,
                                suplementos: null,
                                tabaco: null
                            })
                            // window.location.reload()
                            history.push('/client/plan/confirmation')
                            // sessionStorage.setItem('currentUser', JSON.stringify(data))
                            // sessionStorage.setItem('isAuthenticated', true)
                            
                        }
                    })
            },
            loadChatConversation: (role_id = '', plan_id = '') => {
                const store = getStore()
                fetch(store.path + '/contact/profesional/' + role_id + '/' + plan_id, {
                    method: 'GET',
                    headers: {
                        "Content-type": 'aplication/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                error: null,
                                chat: data
                            })
                        }
                    })
            },
            clientSendMessage: (e, plan_id,sender_role_id,reciever_role_id, client_email, profesional_email) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/contact/profesional/'+sender_role_id+'/'+reciever_role_id+'/'+plan_id, {
                    method: 'POST',
                    body: JSON.stringify({
                        comment : store.comment,
                        plan_id: plan_id,
                        client_email : client_email,
                        trainer_email: profesional_email,
                        nutritionist_email:profesional_email
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                comment:null,
                                error:null
                                
                            })
                        }
                        window.location.reload()
                    })
                },
        }
    }
}
export default getState;
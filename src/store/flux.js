const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            path:'http://localhost:5000',
            username:null,
            currentUser:null,
            isAuthenticated:false,
            email:null,
            password:null,
            name:null,
            lastname:null,
            errors:null,
            photo:null,
            role: null
        },
        actions: {
            handleChange:e=>{
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            isAuthenticated:()=>{
                if(sessionStorage.getItem('currentUser')){
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuthenticated : sessionStorage.getItem('isAuthenticated')
                    })
                }
            },
            login: (e,history,role_id) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/login/'+ role_id,{
                    method:'POST',
                    body: JSON.stringify( {
                        email: store.email,
                        password: store.password
                    }),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data =>{
                    if(data.msg){
                        setStore({
                            error:data
                        })
                    }else{
                        setStore({
                            currentUser: data,
                            isAuthenticated : true,
                            email: null,
                            password:null,
                            error: null,
                            role:null
                        })
                        sessionStorage.setItem('currentUser', JSON.stringify(data))
                        sessionStorage.setItem('isAuthenticated', true)
                        history.push('/profile')
                    }
                })
            },
            admin_login:(e,history,role_id)=>{
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/login/'+ role_id,{
                    method:'POST',
                    body: JSON.stringify({
                        username: store.username,
                        password: store.password
                    }),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data =>{
                    if(data.msg){
                        setStore({
                            error:data
                        })
                    }else{
                        setStore({
                            currentUser: data,
                            isAuthenticated : true,
                            username:null,
                            email: null,
                            password:null,
                            error: null,
                            role:null
                        })
                        sessionStorage.setItem('currentUser', JSON.stringify(data))
                        sessionStorage.setItem('isAuthenticated', true)
                        history.push('/admin/profile')
                    }
                })
            },
            register_client:(e,history)=>{
                e.preventDefault();
                const store = getStore();
                let formData = new FormData()
                formData.append('email',store.email)
                formData.append('password',store.password)
                formData.append('name',store.name)
                formData.append('lastname',store.lastname)
                fetch(store.path + '/register/client',{
                    method:'POST',
                    body: formData
                })
                .then(resp => resp.json())
                .then(data=>{
                    if(data.msg){
                        setStore({
                            error:data
                        })
                    }else{
                        setStore({
                            currentUser: data,
                            isAuthenticated: true,
                            email: null,
                            password:null,
                            photo: null,
                            error:null,
                            role: null
                        })
                        sessionStorage.setItem('currentUser', JSON.stringify(data))
                        sessionStorage.setItem('isAuthenticated', true)
                        history.push('/profile')
                    }
                })
            }
        }
    }
}
export default getState;
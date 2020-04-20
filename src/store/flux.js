const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            path:'http://localhost:5000',
            currentUser:null,
            isAuthenticated:false,
            email:null,
            password:null,
            name:null,
            lastname:null,
            errors:null,
            photo:null
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
            login:(e,history,role_id)=>{
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/login/'+ role_id,{
                    method:'POST',
                    body: JSON.stringify({
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
                            error: null
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
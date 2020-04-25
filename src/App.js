import React from 'react'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './views/About.jsx'
import OurTeam from './views/OurTeam.jsx'
import Home from './views/Home.jsx'
import NutritionalEducation from './components/NutritionalEducation.jsx'
import FitnessEducation from './components/FitnessEducation.jsx'
import Clients from './components/Clients.jsx'
import injectContext from './store/appContext.js'
import AdminClients from './views/AdminClients.jsx'
import AdminProfesionals from './views/AdminProfesionals.jsx'
import ClientDetail from './views/AdminClientDetail.jsx'
import FormRegNutri from './components/FormingRegNutri.jsx'
import FormRegTrainer from './components/FormingRegTrainer.jsx'
import AdminProfesionalDetail from './views/AdminProfesionalDetail.jsx'
import AdminLogin from './views/AdminLogin.jsx'
import HealthPlans from './components/HealthPlans.jsx'
import Login from './views/Login.jsx'
import PersonalTrainers from './components/PersonalTrainers.jsx'
import ProfessionalProfile from './views/ProfessionalProfile.jsx'
import Register from './views/Register.jsx'
import ProfessionalDetails from './components/ProfessionalDetails.jsx'
import AdminProfile from './views/AdminProfile.jsx'
import HealthTeam from './components/HealthTeam.jsx'
import Nutritionists from './components/Nutritionists.jsx'
import Profile from './views/Profile.jsx'
import ClientPlans from './components/ClientPlans.jsx'
import FormIngresoClient from './components/FormIngresoCliente.jsx'
import CreatePlan from './components/check/CreatePlan.jsx'
import AvisoEnvioFormClient from './components/check/SentPlan.jsx'



const App = props => {

  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/team' component={OurTeam} />
          <Route exact path='/personal-trainers/:role_id/:id' component={ProfessionalDetails}/>
          <Route exact path='/nutritionists/:role_id/:id' component={ProfessionalDetails}/>
          <Route exact path='/nutritionists' component={Nutritionists}/>
          <Route exact path='/personal-trainers' component={PersonalTrainers}/>
          <Route exact path='/nutritional-education' component={NutritionalEducation} />
          <Route exact path='/fitness-education' component={FitnessEducation} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/register/profesional/2' component={FormRegNutri} />
          <Route exact path='/register/profesional/3' component={FormRegTrainer} />
          <Route exact path='/profile/client/health-team' component={HealthTeam} />
          <Route exact path='/profile/client/nuevo-plan' component={FormIngresoClient} /*Crear plan, opcion por Javiera*//>
          <Route exact path='/profile/client/crear-plan' component={CreatePlan}/*Crear plan, opcion por Tomas*/ />
          <Route exact path='/profile/client/plans' component={ClientPlans} /> 
          <Route exact path='/profile/client/health-plans' component={HealthPlans} />
          <Route exact path='/profile/professional/clients' component={Clients} />
          <Route exact path='/profile/professional' component={ProfessionalProfile} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/admin/login' component={AdminLogin} />
          <Route exact path='/admin/profile' component={AdminProfile} />
          <Route exact path='/admin/client' component={AdminClients} />
          <Route exact path='/admin/client/:id' component={ClientDetail} />
          <Route exact path='/admin/profesional' component={AdminProfesionals} />
          <Route exact path='/admin/profesional/:role_id/:id' component={AdminProfesionalDetail} />
          <Route exact path='/client/plan/confirmation' component={AvisoEnvioFormClient} />
        </Switch>
      </Router>
    </>
  )
}

export default injectContext(App);
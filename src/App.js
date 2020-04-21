import React from 'react'
import NavBar from './components/navBar.jsx'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import Profile from './views/profile.jsx'
import About from './views/About.jsx'
import OurTeam from './views/OurTeam.jsx'
import Home from './views/Home.jsx'
import Nutritionists from './components/nutritionists.jsx'
import PersonalTrainers from './components/personaltrainers.jsx'
import NutritionalEducation from './components/nutrionaleducation.jsx'
import FitnessEducation from './components/fitnesseducation.jsx'
import HealthTeam from './components/healthteam.jsx'
import HealthPlans from './components/healthplans.jsx'
import ProfessionalProfile from './views/professionalprofile.jsx'
import Clients from './components/clients.jsx'
import injectContext from './store/appContext.js'
import AdminLogin from './views/adminlogin.jsx'
import AdminProfile from './views/adminprofile.jsx'
import AdminClients from './views/AdminClients.jsx'
import AdminProfesionals from './views/AdminProfesionals.jsx'
import ClientDetail from './views/AdminClientDetail.jsx'


const App = props => {

  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/team' component={OurTeam} />
          <Route path='/nutrionists' component={Nutritionists}/>
          <Route path='/personal-trainers' component={PersonalTrainers}/>
          <Route path='/nutritional-education' component={NutritionalEducation} />
          <Route path='/fitness-education' component={FitnessEducation} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile/health-team' component={HealthTeam} />
          <Route path='/profile/health-plans' component={HealthPlans} />
          <Route exact path='/profile/professional/clients' component={Clients} />
          <Route exact path='/profile/professional' component={ProfessionalProfile} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/admin/login' component={AdminLogin} />
          <Route exact path='/admin/profile' component={AdminProfile} />
          <Route exact path='/admin/client' component={AdminClients} />
          <Route exact path='/admin/client/:id' component={ClientDetail} />
          <Route exact path='/admin/profesionals' component={AdminProfesionals} />
        </Switch>
      </Router>
    </>

  )
}

export default injectContext(App);
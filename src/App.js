import React from 'react'
import NavBar from './components/navbar.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import Profile from './views/profile.jsx'
import About from './views/about.jsx'
import OurTeam from './views/ourteam.jsx'
import Home from './views/home.jsx'
import Nutritionists from './components/nutritionists.jsx'
import PersonalTrainers from './components/personaltrainers.jsx'
import NutritionalEducation from './components/nutrionaleducation.jsx'
import FitnessEducation from './components/fitnesseducation.jsx'


const App = props => {

  return (
    <>
      <NavBar />
      <Router>
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
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>

  )
}

export default App;
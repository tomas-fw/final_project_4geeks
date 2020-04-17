import React from 'react'
import NavBar from './components/navBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'
import NutritionistRegister from './views/NutritionistRegister'
import PersonalTrainer from './views/PersonalTrainer'
import Profile from './views/Profile'
import About from './views/About'
import OurTeam from './views/OurTeam'
import Home from './views/Home'


const App = props => {

  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/team' component={OurTeam} />
          <Route path='/about' component={About} />
          <Route path='/nutri-register' component={NutritionistRegister} />
          <Route path='/pt-register' component={PersonalTrainer} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>

  )
}

export default App
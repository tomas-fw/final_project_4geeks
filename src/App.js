import React from 'react'
import NavBar from './components/navBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './views/login'
import Register from './views/register'
import Home from './views/Home'
import nutritionistregister from './views/nutritionistregister'
import personalTrainer from './views/personalTrainer'
import Profile from './views/profile'
import About from './views/About'


const App = props => {

  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/nutri-register' component={nutritionistregister} />
          <Route path='/pt-register' component={personalTrainer} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>

  )
}

export default App
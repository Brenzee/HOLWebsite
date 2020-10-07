import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'

//Each language page
import Lv from './Lv'
import Eng from './Eng'
import Ru from './Ru'
import Thanks from './Components/Thanks/Thanks'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/ru' component={Ru} />
            <Route path='/en' component={Eng} />
            <Route path='/success' component={Thanks} />
            <Route path='/' exact component={Lv} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App

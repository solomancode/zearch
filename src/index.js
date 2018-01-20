import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

// COMPONENTS
import MainView from './components/mainView/mainView'

// PROVIDERS
import * as theme from './providers/theme'

// NORMALIZER
import 'normalize.css'

// REDUX
import reducers from './redux/reducers/'
const store = createStore( reducers )

// RENDER ELEMENT
const $mainEl = document.getElementById('main')

render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme.terminal }>
      <Router>
        <MainView></MainView>
      </Router>
    </ThemeProvider>
  </Provider>
  , $mainEl
)
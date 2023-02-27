import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { TKConfigProvider } from './components/base'

import App from './App'
import stores from './stores'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider {...stores}>
        <TKConfigProvider>
          <App />
        </TKConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

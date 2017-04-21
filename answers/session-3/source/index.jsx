import React from 'react'
import ReactDOM from 'react-dom'
import Application from '~/components/Application'
import store from '~/store'

ReactDOM.render(
  <Application store={store} />,
  document.getElementById('ROOT')
)
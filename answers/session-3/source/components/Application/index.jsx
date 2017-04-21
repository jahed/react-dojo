import React from 'react'
import { Provider } from 'react-redux'
import Application from './Application'
import store from '~/store'

export default function({ store }) {
    return (
        <Provider store={store}>
            <Application />
        </Provider>
    )
}
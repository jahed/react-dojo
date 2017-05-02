import React from 'react'
import { connect } from 'react-redux'
import { hideDrawer } from '~/actions/drawer'
import Drawer from './Drawer'

export default connect(
    state => ({
        active: state.drawer.show
    }),
    dispatch => ({
        onInteraction() {
            dispatch(hideDrawer())
        }
    })
)(Drawer)

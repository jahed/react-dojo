import React from 'react'
import { connect } from 'react-redux'
import Drawer from './Drawer'

export default connect(
    state => ({ active: state.drawer.show })
)(Drawer)
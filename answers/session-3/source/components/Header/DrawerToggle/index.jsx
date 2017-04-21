import { connect } from 'react-redux'
import DrawerToggle from './DrawerToggle'
import { showDrawer, hideDrawer } from '~/actions/drawer'

export default connect(
    state => ({
        active: state.drawer.show
    }),
    dispatch => ({
        onActivate() {
            dispatch(showDrawer())
        },
        onDeactivate() {
            dispatch(hideDrawer())
        }
    })
)(DrawerToggle)
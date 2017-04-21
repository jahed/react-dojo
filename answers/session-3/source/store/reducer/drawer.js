import { Actions } from '~/actions/drawer'

const initialState = {
    show: false
}

export default function drawer(state = initialState, action) {
    switch(action.type) {
        case Actions.SHOW_DRAWER: {
            return {
                show: true
            }
        }
        case Actions.HIDE_DRAWER: {
            return {
                show: false
            }
        }
        default: {
            return state
        }
    }
}

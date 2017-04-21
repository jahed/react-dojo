
export const Actions = {
    SHOW_DRAWER: '@@react-dojo/drawer/SHOW_DRAWER',
    HIDE_DRAWER: '@@react-dojo/drawer/HIDE_DRAWER'
}

export function showDrawer() {
    return {
        type: Actions.SHOW_DRAWER
    }
}

export function hideDrawer() {
    return {
        type: Actions.HIDE_DRAWER
    }
}
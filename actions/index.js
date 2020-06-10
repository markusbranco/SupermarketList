import firebase from '../fb';

export function getitens() {
    return(dispatch) => {
        firebase.database().ref('/items').on('value', snapshot => {
            dispatch({
                type:"ITEMS_FETCH",
                payload:snapshot.val()
            })

        })
    }
}

export function createNewItem(name) {
    return(dispatch) => {
        firebase.database().ref('/items').push({name})
    }
}

export function deleteItens(key) {
    return(dispatch) => {
        firebase.database().ref(`/items/${key}`).remove()
    }
}

export function editItem(name, key) {
    return(dispatch) => {
        firebase.database().ref(`/items`).child(key).update({name})
    }
}
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

export function createNewItem(name, price) {
    return(dispatch) => {
        firebase.database().ref('/items').push({name, price})
    }
}

export function deleteItens(key) {
    return(dispatch) => {
        firebase.database().ref(`/items/${key}`).remove()
    }
}

export function editItem(name, price, key) {
    return(dispatch) => {
        firebase.database().ref(`/items`).child(key).update({name, price})
    }
}
import firebase from 'react-native-firebase';

export function addItem(item, addComplete) {

    firebase.firestore()
    .collection('Items')
    .add({
        name: item.name
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));

}

export async function getItems(itemsRetrieved) {

    
    var snapshot = await firebase.firestore()
    .collection('Items')
    .get()

    snapshot.forEach((doc) => {
        itemList.push(doc.data());
    });

    itemsRetreived(itemList);

}
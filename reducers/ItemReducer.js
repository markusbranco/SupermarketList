export default function (state={}, action) {
    switch(action.type) {
        case "ITEMS_FETCH":
            console.log('============',action.payload)
            return {
                ...state,
                itemList:action.payload
            }

        default:
            return state
    }
}
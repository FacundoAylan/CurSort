const initialState={
    users:[],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'EDIT_USERS':
            return{
                ...state,
            }
            

            default:
                return state;


    }
}

export default rootReducer;
import { REMOVE_DECK, ADD_DECK } from '../actions/DeckActions'
import { Switch } from 'react-native-gesture-handler';

const initialPostState = {
    deckList:[],    
 }

//ToDo mudar o nome do Reducer???
function deckReducer(state = initialPostState, action){

    switch(action.type){
        case REMOVE_DECK:
            return {}
        case ADD_DECK:
            return {}
        default:
            return state
    }

}

export default deckReducer
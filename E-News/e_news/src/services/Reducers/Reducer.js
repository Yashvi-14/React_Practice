
// it pushes the data which we get from action into store.
import { ADD_To_CART,REMOVE_To_CART } from '../constants';

const initialState = {
  cardData: [],
};

export default function cardItems(state = initialState, action) {
  console.log("reducer", action);

  switch (action.type) {
    case ADD_To_CART:
      return {
        ...state,
        cardData: [...state.cardData, action.data],
      };
      break;
      case REMOVE_To_CART:
        // state.pop():
        return{
          ...state,
          cardData: state.cardData.slice(0, -1),
        }

    default:
      return state;
  }
}

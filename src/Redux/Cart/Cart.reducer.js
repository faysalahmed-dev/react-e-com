import * as actionTypes from './Cart.actionTypes'

const INTITAL_STATE = {
     hidden: true
}

const cartReducer = (state = INTITAL_STATE,action) => {
     switch(action.type) {
          case actionTypes.TOGGLE_CART : 
               return {
                    ...state,
                    hidden: !state.hidden
               }
          default : return state
     }
}

export default cartReducer;
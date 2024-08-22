// let initialState = {
//   selectedSizes: [],
//   cartItems: [],
// };

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'LOAD_CART':
//       return {
//         ...state,
//         cartItems: action.payload,
//       };
//     case 'TOGGLE_SIZES':
//       return {
//         ...state,
//         selectedSizes: state.selectedSizes.includes(action.payload)
//           ? state.selectedSizes.filter((s) => s !== action.payload)
//           : state.selectedSizes.concat(action.payload),
//       };
//     case 'DELETE_ITEM':
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((p) => {
//           return p.id !== action.payload;
//         }),
//       };
//     case 'INCREASE_QUANTITY':
//       return {
//         ...state,
//         cartItems: state.cartItems.map((p) => {
//           if (action.payload === p.id) {
//             return {
//               ...p,
//               quantity: p.quantity + 1,
//             };
//           }
//           return p;
//         }),
//       };
//     case 'DECREASE_QUANTITY':
//       return {
//         ...state,
//         cartItems: state.cartItems.map((p) => {
//           if (action.payload === p.id && p.quantity > 1) {
//             return {
//               ...p,
//               quantity: p.quantity - 1,
//             };
//           }
//           return p;
//         }),
//       };

//     default:
//       break;
//   }
// }
// reducers.js
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  TOGGLE_SIZE,
  LOAD_CART,
} from './action';

const initialState = {
  selectedSizes: [],
  cartItems: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case TOGGLE_SIZE:
      return {
        ...state,
        selectedSizes: state.selectedSizes.includes(action.payload)
          ? state.selectedSizes.filter((size) => size !== action.payload)
          : state.selectedSizes.concat(action.payload),
      };
    case ADD_TO_CART:
      const isPresent = state.cartItems.some(
        (product) => product.id === action.payload.id
      );
      if (isPresent) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.concat({ ...action.payload, quantity: 1 }),
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === action.payload && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;

// export default rootReducer;

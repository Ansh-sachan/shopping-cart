export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const TOGGLE_SIZE = 'TOGGLE_SIZE';
export const LOAD_CART = 'LOAD_CART';

export function handleClick(size) {
  return {
    type: 'TOGGLE_SIZE',
    payload: size,
  };
}
export function handleCart(product) {
  return {
    type: 'LOAD_CART',
    payload: product,
  };
}
export function quantityIncrement(id) {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: id,
  };
}
export function quantityDecrement(id) {
  return {
    type: 'DECREMENT_QUANTITY',
    payload: id,
  };
}
export function handleDelete(id) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  };
}

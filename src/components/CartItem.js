import { connect } from 'react-redux';
import {
  handleDelete,
  quantityDecrement,
  quantityIncrement,
} from '../store/action';

function CartItem(props) {
  return props.cartItems.map((product) => {
    return (
      <>
        <div className="flex cart-item">
          <div>
            <img src={`/products/${product.sku}_2.jpg`} alt="" />
          </div>
          <div className="item-info">
            <h3>{product.title}</h3>
            <p>
              {product.availableSizes} | {product.style}
            </p>
            <span>Quantity : {product.quantity}</span>
          </div>
          <div>
            <button
              className="cancel-btn"
              onClick={() => props.dispatch(handleDelete(product.id))}
            >
              x
            </button>
            <span className="item-price">
              {product.currencyFormat + product.price}
            </span>
            <div className="flex i-btn">
              <button
                onClick={() => props.dispatch(quantityIncrement(product.id))}
              >
                +
              </button>
              <button
                onClick={() => props.dispatch(quantityDecrement(product.id))}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartItem);

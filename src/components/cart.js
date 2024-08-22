import { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  open = () => {
    this.setState({ isOpen: true });
  };
  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    let totalQuantity = this.props.cartItems.reduce((acc, cv) => {
      acc = acc + cv.quantity;
      return acc;
    }, 0);
    let totalPrice = this.props.cartItems.reduce((acc, cv) => {
      acc = acc + cv.price * cv.quantity;
      return acc;
    }, 0);
    const { isOpen } = this.state;
    if (!isOpen) {
      return (
        <>
          <div className="closed-cart">
            <button className="cart-btn" onClick={this.open}>
              🛒
            </button>
            <span>{totalQuantity}</span>
          </div>
        </>
      );
    }
    return (
      <>
        <aside className="cart">
          <span className="close-btn" onClick={this.close}>
            x
          </span>
          <div>
            <div>
              <div className="icon">🛒</div>
              <span className="quantity">{totalQuantity}</span>
            </div>
          </div>
          <CartItem />
          <Checkout totalPrice={totalPrice} />
        </aside>
      </>
    );
  }
}

function Checkout(props) {
  return (
    <>
      <div className="checkout">
        <div className="flex">
          <h3>subtotal</h3>
          <div className="total-price">
            <span>${props.totalPrice}</span>
            <p>OR UP TO 9 x $ 14.26</p>
          </div>
        </div>
        <button
          className="checkout-btn"
          onClick={() => alert(`Total Bill = ${props.totalPrice}`)}
        >
          Checkout
        </button>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);

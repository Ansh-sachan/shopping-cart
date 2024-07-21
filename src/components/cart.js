import { Component } from 'react';

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
    const { isOpen } = this.state;
    if (!isOpen) {
      return (
        <>
          <div className="closed-cart">
            <button className="cart-btn" onClick={this.open}>
              🛒
            </button>
            <span>3</span>
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
              <span className="quantity">4</span>
            </div>
          </div>
          <CartItem />
          <Checkout />
        </aside>
      </>
    );
  }
}

function CartItem() {
  return (
    <>
      <div className="flex cart-item">
        <div>
          <img src="/products/5619496040738316_2.jpg" alt="" />
        </div>
        <div className="item-info">
          <h3>title</h3>
          <p>X | Wine</p>
          <span>Quantity : 2</span>
        </div>
        <div>
          <button className="cancel-btn">x</button>
          <span className="item-price">$21</span>
          <div className="flex">
            <button className="i-btn">+</button>
            <button className="i-btn">-</button>
          </div>
        </div>
      </div>
    </>
  );
}
function Checkout() {
  return (
    <>
      <div className="checkout">
        <div className="flex">
          <h3>subtotal</h3>
          <div className="total-price">
            <span>$121</span>
            <p>OR UP TO 9 x $ 14.26</p>
          </div>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </>
  );
}
export default Cart;

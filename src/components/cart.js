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
          {this.props.cartItems.map((p) => (
            <CartItem
              item={p}
              quantityIncrement={this.props.quantityIncrement}
              quantityDecrement={this.props.quantityDecrement}
              handleDelete={this.props.handleDelete}
              key={p.id}
            />
          ))}
          <Checkout totalPrice={totalPrice} />
        </aside>
      </>
    );
  }
}

function CartItem(props) {
  let product = props.item;
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
            onClick={() => props.handleDelete(product.id)}
          >
            x
          </button>
          <span className="item-price">
            {product.currencyFormat + product.price}
          </span>
          <div className="flex i-btn">
            <button onClick={() => props.quantityIncrement(product.id)}>
              +
            </button>
            <button onClick={() => props.quantityDecrement(product.id)}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
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
export default Cart;

import React from 'react';
import Cart from './components/cart';
import Main from './components/main';
import Sizes from './components/sizes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizes: [],
      cartItems: [],
    };
  }
  componentDidMount() {
    if (localStorage.carts) {
      this.setState({ cartItems: JSON.parse(localStorage.carts) });
    }
    window.addEventListener('beforeunload', this.handleUpdateLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUpdateLocalStorage);
  }

  handleUpdateLocalStorage = () => {
    localStorage.setItem('carts', JSON.stringify(this.state.cartItems));
  };

  handleClick = (size) => {
    if (this.state.selectedSizes.includes(size)) {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.concat(size),
      }));
    }
  };
  handleCart = (p) => {
    let isPresent =
      this.state.cartItems.findIndex((product) => product.id === p.id) !== -1;
    if (isPresent) {
      this.quantityIncrement(p.id);
    } else {
      this.setState((prevState) => ({
        cartItems: prevState.cartItems.concat({ ...p, quantity: 1 }),
      }));
    }
  };
  quantityIncrement = (id) => {
    this.setState((prevState) => {
      let updatedCart = prevState.cartItems.map((p) => {
        if (id === p.id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      return {
        cartItems: updatedCart,
      };
    });
  };
  quantityDecrement = (id) => {
    this.setState((prevState) => {
      let updatedCart = prevState.cartItems.map((p) => {
        if (id === p.id && p.quantity > 1) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
      return {
        cartItems: updatedCart,
      };
    });
  };
  handleDelete = (id) => {
    this.setState((prevState) => {
      let updatedCart = prevState.cartItems.filter((p) => {
        return p.id !== id;
      });
      return {
        cartItems: updatedCart,
      };
    });
  };

  render() {
    let { selectedSizes } = this.state;
    return (
      <>
        <div className="container flex wrap">
          <Sizes selectedSizes={selectedSizes} handleClick={this.handleClick} />
          <Main selectedSizes={selectedSizes} handleCart={this.handleCart} />
          <Cart
            cartItems={this.state.cartItems}
            quantityIncrement={this.quantityIncrement}
            quantityDecrement={this.quantityDecrement}
            handleDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}

export default App;

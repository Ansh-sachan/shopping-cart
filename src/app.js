import React from 'react';
import Cart from './components/cart';
import Main from './components/main';
import Sizes from './components/sizes';
import { handleCart, handleClick } from './store/action';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    let { handleCart } = this.props;
    let savedCart = localStorage.getItem('carts');
    if (savedCart) {
      handleCart(JSON.parse(savedCart));
    }
    window.addEventListener('beforeunload', this.handleUpdateLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUpdateLocalStorage);
  }

  handleUpdateLocalStorage = () => {
    localStorage.setItem('carts', JSON.stringify(this.props.cartItems));
  };

  render() {
    let { selectedSizes, cartItems, handleCart } = this.props;
    console.log(selectedSizes, cartItems);
    return (
      <>
        <div className="container flex wrap">
          <Sizes />
          <Main selectedSizes={selectedSizes} handleCart={handleCart} />
          <Cart />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    selectedSizes: state.selectedSizes,
    cartItems: state.cartItems,
  };
}
const mapDispatchToProps = {
  handleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

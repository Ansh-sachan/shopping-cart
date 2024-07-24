import { Component } from 'react';
import Filter from './filter';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrder: '',
    };
  }
  handleOrder = ({ target }) => {
    this.setState({
      selectedOrder: target.value,
    });
  };

  handleOrderProducts = (order, sizes, products) => {
    let sortedProduct = [...products];
    if (sizes.length >= 1) {
      for (let size of sizes) {
        sortedProduct = sortedProduct.filter((p) =>
          p.availableSizes.includes(size)
        );
      }
    }
    if (order === 'highest') {
      sortedProduct = sortedProduct.sort((a, b) => b.price - a.price);
    }
    if (order === 'lowest') {
      sortedProduct = sortedProduct.sort((a, b) => a.price - b.price);
    }
    return sortedProduct;
  };

  render() {
    let { selectedOrder } = this.state;
    let products = this.handleOrderProducts(
      selectedOrder,
      this.props.selectedSizes,
      this.props.data
    );
    return (
      <>
        <div className="flex">
          <h3>{`${products.length} product${
            products.length > 1 ? 's' : ''
          } found`}</h3>
          <Filter order={selectedOrder} handleOrder={this.handleOrder} />
        </div>
        <div className="flex wrap">
          {products.map((item) => {
            return (
              <Product
                info={item}
                handleCart={this.props.handleCart}
                key={item.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}

function Product(props) {
  return (
    <>
      <div className="product-info">
        <div>
          {props.info.isFreeShipping ? (
            <p className="shipping">Free Shipping</p>
          ) : null}
        </div>
        <div>
          {' '}
          <img src={`/products/${props.info.sku}_1.jpg`} alt="error to load" />
        </div>
        <p className="title">{props.info.title}</p>
        <div className="price">
          <span className="currencyFormat">{props.info.currencyFormat}</span>
          <span>{props.info.price}</span>
        </div>
        <div className="emi">
          {`or ${props.info.installments} x ${
            props.info.currencyFormat +
            Math.round(props.info.price / props.info.installments)
          }`}
        </div>
        <button className="btn" onClick={() => props.handleCart(props.info)}>
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default Products;

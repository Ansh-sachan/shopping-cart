import { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h3>{`${this.props.data.length} product(s) found`}</h3>
        <div className="flex wrap">
          {this.props.data.map((item) => {
            return <Product info={item} />;
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
          <bold>{props.info.price}</bold>
        </div>
        <div className="emi">
          {`or ${props.info.installments} x ${
            props.info.currencyFormat +
            Math.round(props.info.price / props.info.installments)
          }`}
        </div>
        <button className="btn">Add To Cart</button>
      </div>
    </>
  );
}

export default Products;

import { Component } from 'react';
import data from './data.json';

class Products extends Component {
  state = {};
  render() {
    return (
      <>
        <h3>{`${data.products.length} product(s) found`}</h3>
        <div className="flex wrap">
          {data.products.map((item) => {
            return (
              <>
                <div className="product-info">
                  <div className="shipping">
                    {item.isFreeShipping ? 'Free Shipping' : ''}
                  </div>
                  <div>
                    {' '}
                    <img
                      src={`/products/${item.sku}_1.jpg`}
                      alt="error to load"
                    />
                  </div>
                  <p className="title">{item.title}</p>
                  <div className="price">
                    <span className="currencyFormat">
                      {item.currencyFormat}
                    </span>
                    <bold>{item.price}</bold>
                  </div>
                  <div className="emi">
                    {`or ${item.installments} x ${
                      item.currencyFormat +
                      Math.round(item.price / item.installments)
                    }`}
                  </div>
                  <button className="btn">Add To Cart</button>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Products;

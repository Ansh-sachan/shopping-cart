import { Component } from 'react';
import data from './data.json';

class Sizes extends Component {
  state = {};
  render() {
    let sizes = data.products.reduce((acc, cv) => {
      acc = acc.concat(cv.availableSizes);

      return acc;
    }, []);
    console.log(sizes);
    return (
      <>
        <aside className="flex-20 flex sidebar">
          <div>
            <h2>Sizes :</h2>
            <button className="size-btn">XL</button>
            <button className="size-btn">XL</button>
            <button className="size-btn">XL</button>
            <button className="size-btn">XL</button>
            <button className="size-btn">XL</button>
          </div>
        </aside>
      </>
    );
  }
}

export default Sizes;

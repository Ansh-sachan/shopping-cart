import Products from './products';
import data from './data.json';

function Main(props) {
  return (
    <>
      <div className="flex-60">
        <Products
          data={data.products}
          selectedSizes={props.selectedSizes}
          handleCart={props.handleCart}
        />
      </div>
    </>
  );
}
export default Main;

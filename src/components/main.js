import Products from './products';
import data from './data.json';

function Main() {
  return (
    <>
      <div className="flex flex-60">
        <Products data={data.products} />
      </div>
    </>
  );
}
export default Main;

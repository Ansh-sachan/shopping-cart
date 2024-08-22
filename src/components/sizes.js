import { connect } from 'react-redux';
import data from './data.json';
import { handleClick } from '../store/action';

function Sizes(props) {
  let sizes = data.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);

    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  return (
    <>
      <aside className="flex-20 flex sidebar">
        <div>
          <h2>Sizes :</h2>
          {uniqueSizes.map((size) => {
            return (
              <button
                className={
                  props.selectedSizes.includes(size)
                    ? 'size-btn active'
                    : 'size-btn'
                }
                onClick={() => props.dispatch(handleClick(size))}
                key={size}
              >
                {size}
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}

let mapStateToProps = (state) => {
  return {
    selectedSizes: state.selectedSizes,
  };
};

export default connect(mapStateToProps)(Sizes);

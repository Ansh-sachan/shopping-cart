import data from './data.json';

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
                onClick={() => props.handleClick(size)}
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

export default Sizes;

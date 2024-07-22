function Filter(props) {
  return (
    <div className="filter">
      Order by
      <select value={props.order} onChange={props.handleOrder}>
        <option value="">None</option>
        <option value="lowest">Lower to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}
export default Filter;

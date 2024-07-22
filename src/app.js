import React from 'react';
import Cart from './components/cart';
import Main from './components/main';
import Sizes from './components/sizes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizes: [],
    };
  }
  handleClick = (size) => {
    if (this.state.selectedSizes.includes(size)) {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.concat(size),
      }));
    }
  };
  render() {
    let { selectedSizes } = this.state;
    return (
      <>
        <div className="container flex wrap">
          <Sizes selectedSizes={selectedSizes} handleClick={this.handleClick} />
          <Main selectedSizes={selectedSizes} />
          <Cart />
        </div>
      </>
    );
  }
}

export default App;

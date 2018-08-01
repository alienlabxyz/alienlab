import React, { Component } from 'react'
import Link from 'gatsby-link'
import _ from 'lodash'

import logo from '../images/alienlab_vectorized.png'; 
import './index.css';

class ComingSoon extends Component {
  state = { dotCount: 0 }

  componentDidMount() {
    setInterval(this.updateDotCount.bind(this), 1000);
  } 

  updateDotCount() {  
    const { dotCount } = this.state;
    let newDotCount = dotCount + 1;
    if (dotCount === 3) {
      newDotCount = 0;
    }
    this.setState({ dotCount: newDotCount });
  }

  renderDots() {
    return _.times(this.state.dotCount, () => '.');
  }

  render() {
    return (
      <div className="coming-soon">
        <img src={logo} alt="alianlab logo"/>
        <h1>alienlab</h1>
        <h6>Coming soon{this.renderDots()}</h6>
      </div>
    );
  }
}

export default ComingSoon

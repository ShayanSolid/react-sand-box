import React, {Component} from 'react';

class MySmartComponent extends Component {
  render(props) {
    return (
      <div>
        <p>Hello {this.props.name}! I wish you a great day!</p>
      </div>
    )
  }
}

export default MySmartComponent;


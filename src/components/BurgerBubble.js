import React, { Component } from "react";

class BurgerBubble extends Component {


  render() {
    return (
      <div id="burger-bubble">
        <h1>Burger</h1>
        <ul id="burger-stack-container">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    );
  }
}

export default BurgerBubble;
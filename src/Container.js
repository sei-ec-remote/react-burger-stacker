import React, {Component} from 'react';
import Ingredients from './Ingredient'
import Burger from './'

class BurgerContainer extends Component {
    state = {
      // initialize the fruit list to the full list passed in props
      fruitsToDisplay: this.props.fruits,
      // intialize the filter value to an empty string
      filterValue: ''
    }

    handleFilterChange = (e) => {
      e.preventDefault()
      const filterValue = e.target.value;
      // remove fruits that don't contain the filter value
      const filteredFruitList = this.props.fruits.filter(fruit => {
        return fruit.toLowerCase().includes(filterValue.toLowerCase())
      })
      this.setState({
          fruitsToDisplay: filteredFruitList,
          filterValue,
      })
    }

    render() {
      return (
        <div>
          <Input value={this.state.filterValue} onChange={this.handleFilterChange} />
          <List fruits={this.state.fruitsToDisplay} />
        </div>
      )
    }

  }


export default BurgerContainer

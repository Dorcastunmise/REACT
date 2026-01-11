import React from 'react'
import PropTypes from 'prop-types'

class ClassComponent extends React.Component {
  constructor(props) {
    // super keyword is used to call the constructor of a parent class. 
    // It is necessary to ensure initialization of parent class is executed.
    super(props); 
    this.state = {
        count: 0
    }
  }

  //render() returns React elements that will be rendered to the DOM.

  render() {
    return (
      <>
        <h1>Class Component Count: {this.state.count}</h1>
        <button onClick={this.handleInc}>Increment</button>
      </>
    )
  }

    handleInc = () => {
        this.setState((prevState) => (
            {
            count: prevState.count + 1,
            }
        ));
    }

}

ClassComponent.propTypes = {}

export default ClassComponent
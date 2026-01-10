/* 
In React class components, lifecycle methods are special functions that run at specific points in a component's life: when it is created (Mounting), updated (Updating), or destroyed (Unmounting).

1. Mounting (Creation)
These methods run in order when an instance of a component is being created and inserted into the DOM.

constructor(): Used to initialize state and bind event handlers.

render(): The only required method. It examines this.props and this.state and returns the JSX.

componentDidMount(): Runs immediately after the component is added to the DOM. This is where you should initiate API calls or set up subscriptions.

2. Updating
An update can be caused by changes to props or state.

shouldComponentUpdate(): Returns a boolean. It allows you to exit the update process to improve performance if you know the UI doesn't need to change.

render(): Re-renders the UI based on changes.

componentDidUpdate(prevProps, prevState): Runs after the update is flushed to the DOM. It is useful for performing network requests based on comparing the current props to previous props.

3. Unmounting
This phase happens when a component is being removed from the DOM.

componentWillUnmount(): Used for cleanup. You should cancel network requests, remove event listeners, or invalidate timers here to prevent memory leaks.

*/

import React, { Component } from 'react';

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json, loading: false });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ loading: true });
      fetch(this.props.url)
        .then(res => res.json())
        .then(json => {
          this.setState({ data: json, loading: false });
        });
    }
  }

  componentWillUnmount() {
    console.log("Cleanup performed");
  }

  render() {
    const { data, loading } = this.state;

    if (loading) return <div>Loading...</div>;

    return (
      <div>
        <h1>{data.title}</h1>
      </div>
    );
  }
}

export default DataFetcher;
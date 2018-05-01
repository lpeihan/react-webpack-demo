import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, decrement } from './actions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
        <p className="text-center">
          <button
            className="btn btn-primary mr-2"
            onClick={ () => { this.props.increment(); } }
          >
            Increase~~
          </button>
          <button
            className="btn btn-danger my-2"
            onClick={ () => { this.props.decrement(); }}
          >
            Decrease!~~
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

App.propTypes = {
  counter: PropTypes.number.isRequired
};

export default connect(mapStateToProps, { increment, decrement })(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import './app.styl';
import { increment, decrement } from './actions';
import { addReminder, deleteReminder, clearReminders } from './actions/reminders';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      date: ''
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.date);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  clearReminders() {
    this.props.clearReminders();
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-8 mt-2">
        {
          reminders.map(reminder => {
            return (
              <li key={ reminder.id } className="list-group-item">
                <div className="list-item">
                  <div>{ reminder.text }</div>
                  <div><em>{ moment(new Date(reminder.date)).fromNow() }</em></div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={ () => this.deleteReminder(reminder.id) }
                >
                  &#x2715;
                </div>
              </li>
            );
          })
        }
      </ul>
    );
  }
  render() {
    return (
      <div className="app">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="I have to..."
              onChange={ event => this.setState({ text: event.target.value }) }
            />
            <input
              type="datetime-local"
              className="form-control"
              onChange={ (event) => this.setState({ date: event.target.value }) }
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={ () => this.addReminder() }
          >
            Add Reminder
          </button>
        </div>
        { this.renderReminders() }
        <div
          className="btn btn-danger mt-3"
          onClick={ () => this.clearReminders() }
        >
          Clear Reminders
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    reminders: state.reminders
  };
};

App.propTypes = {
  counter: PropTypes.number.isRequired,
  reminders: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps, {
    increment,
    decrement,
    addReminder,
    deleteReminder,
    clearReminders
  })(App);

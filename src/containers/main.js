import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAllAirports, requestAirport, requestDistance } from '../redux/actions/hello';
import DisplayData from '../components/displayData';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airport: '',
      airportOne: '',
      airportTwo: ''
    };
    this.getAirport = this.getAirport.bind(this);
    this.getDistance = this.getDistance.bind(this);
  }
  componentWillMount() {
  }
  componentWillReceiveProps() {
  }
  getAirport() {
    if (this.state.airport !== '') {
      this.props.requestAirport({ airport: this.state.airport });
    } else {
      alert('Empty Airport');
    }
  }
  getDistance() {
  }
  render() {
    console.log(this.props, '=========');
    console.log(this.state, '-----------------');
    return (
      <div style={{ 'width': '80%', 'margin': '50px auto' }}>
        <div style={{ 'float': 'left', 'position': 'relative' }}>
          <button onClick={() => this.props.requestAllAirports()}>Get All Airports</button>
          <br /><br />
          <input type="text" placeholder="Enter Airport code." onChange={(e) => this.setState({ airport: e.target.value })} />
          <button onClick={() => this.getAirport()}>Get Nearest Airport</button><br /><br /><br />
          <input type="text" placeholder="Enter Airport code." onChange={(e) => this.setState({ airportOne: e.target.value })} />
          <input type="text" placeholder="Enter Airport code." onChange={(e) => this.setState({ airportTwo: e.target.value })} />
          <button onClick={() => this.getDistance()}>Distance between Airport</button><br /><br /><br /><br /><br />
        </div>
        <div style={{ 'float': 'right', 'position': 'relative' }}>
          <DisplayData data={this.props.all} category={'Airports'} />
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    all: state.hello.all,
    airport: state.hello.airport,
    distance: state.hello.distance
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestAllAirports: () => dispatch(requestAllAirports()),
    requestAirport: () => dispatch(requestAirport()),
    requestDistance: () => dispatch(requestDistance())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

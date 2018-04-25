import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: null
    }
  }
  render() {
    return (
      <div className="container">
        <hr />
        <Link to="/" className="waves-effect waves-light btn">Back</Link>
        <h2>dsda {this.state.uid}  </h2>
      </div>
    );
  }
  componentWillMount() {
    this.setState({
      uid: this.props.match.params.uid
    })
  }
}


export default Detail;
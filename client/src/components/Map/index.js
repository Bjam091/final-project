import React, {Component} from 'react';
import { connect } from 'react-redux';

export class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { auth } = this.props;
    return (
      // Map component here
      // auth.user.spotify_username
      // auth.jwt.jwt
      <div>
        Bright map goes here
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    //locations: state.locations build this
  };
};

export default connect(mapState, { })(Map);

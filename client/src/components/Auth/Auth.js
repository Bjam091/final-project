import React, {Component} from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string'
import { Redirect } from 'react-router-dom';
import { initializeJwt, initializeUser } from './redux';
import './auth.scss';

export class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const query = queryString.parse(window.location.search);
    const username = query.user;

    this.props.initializeJwt(username);
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.auth.jwt !== this.props.auth.jwt) && (this.props.jwt !== '')) {
      console.log(this.props.auth.jwt.jwt);
      this.props.initializeUser(this.props.auth.jwt.jwt);
    }
  }

  render() {
    const { auth } = this.props;
    if (!!auth.user.spotify_username) {
      return (
        <Redirect to='/map' />
      )
    }
    return (
      <div className="spinner-wrapper">
        <img className="spinner" src="/assets/spinner.gif" alt="" />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapState, { initializeJwt, initializeUser })(Auth);

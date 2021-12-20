import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

export default function (Component) {
    class RequireAuthentication extends Component {

        componentWillMount() {
            if (!this.props.isLoggedIn) {
                this.props.history.push("/");
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isLoggedIn) {
                this.props.history.push("/");
            }
        }

        render() {
            return this.props.isLoggedIn && <Component {...this.props} />
        }
    }

    const mapStateToProps = state => ({
        isLoggedIn: state.authentification.isLoggedIn
    });


    return withRouter(connect(mapStateToProps)(RequireAuthentication));
}
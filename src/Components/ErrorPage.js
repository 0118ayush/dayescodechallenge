import React, { Component } from 'react';

import { withRouter } from "react-router-dom"

class ErrorPage extends Component {

    componentDidMount() {
        this.pushToHomepageExecution()
    }

    pushToHomepageLogic = () => {
        this.props.history.push("/")
    }

    pushToHomepageExecution = () => {
        this.timerHandle = setInterval(this.pushToHomepageLogic, 6300)
    }

    componentWillUnmount() {
        clearInterval(this.timerHandle)
    }


    render() {

        return (
            <div align="center">
                <h1>404 ERROR - PAGE NOT FOUND - SENDING YOU TO HOMEPAGE... </h1>
                <img src="https://media.giphy.com/media/3ktLJJs5fYT6NP005b/giphy.gif" alt="error gif" />
            </div>
        );
    }
}

export default withRouter(ErrorPage);
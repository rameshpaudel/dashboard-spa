import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import AboutPage from './containers/AboutContainer'
import HomePage from './containers/HomeContainer'
import ServicePage from './containers/ServicesContainer'
import LoginPage from './containers/LoginContainer'

export default function routes() {
    return (
        <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/service" component={ServicePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
        </Fragment>
    )
}
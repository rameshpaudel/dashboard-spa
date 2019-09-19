import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import AboutPage from './containers/AboutContainer'
import HomePage from './containers/HomeContainer'
import ServicePage from './containers/ServicesContainer'

export default function routes() {
    return (
        <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/service" component={ServicePage} />
            <Route path="/about" component={AboutPage} />
        </Fragment>
    )
}
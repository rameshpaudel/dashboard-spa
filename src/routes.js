import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AboutPage from './containers/AboutContainer'
import HomePage from './containers/HomeContainer'
import ServicePage from './containers/ServicesContainer'
import LoginPage from './containers/LoginContainer'
import DashboardPage from './containers/DashboardContainer'
import SinglePage from './containers/SinglePageContainer'

export default function routes() {
    return (
        <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/service" component={ServicePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/single/:id" component={SinglePage} />
            <Route path="/logout" component={() => {
                return (
                    <Redirect to="/login" />
                )
            }} />
        </Fragment>
    )
}
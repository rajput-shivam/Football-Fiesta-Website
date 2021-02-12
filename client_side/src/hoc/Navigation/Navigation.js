import React, { Component } from 'react'
import classes from "./Navigation.module.css";

import Home from "../../containers/Home";
import FootballTournament from "../../containers/FootballTournament";
import FootballTrial from "../../containers/FootballTrial";
import Login from "../../containers/Login";
import Register from "../../containers/Register";
import FanSection from "../../containers/FanSection";
import Protected from "../Protected/Protected";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Navigation extends Component {
    render() {
        return (
            <div >
                <Router>
                    <Link to="/" className={classes.NavigationItem}>HOME</Link>
                    <Link to="trial" className={classes.NavigationItem}>FOOTBALL-TRIAL</Link>
                    <Link to="tournament" className={classes.NavigationItem} >FOOTBALL-TOURNAMENT</Link>
                    <Link to="fan" className={classes.NavigationItem}>FAN-SECTION</Link>
                    <Link to="login" className={classes.NavigationItem}>LOGIN</Link>
                    <Link to="register" className={classes.NavigationItem}>REGISTER</Link>

                    <Switch>
                        <Route path="/trial">
                            <FootballTrial />
                        </Route>
                        <Route path="/tournament">
                            <FootballTournament />
                        </Route>
                        <Route path="/fan">
                            <FanSection />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/" >
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

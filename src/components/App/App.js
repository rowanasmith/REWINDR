import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import UserPage from '../UserPage/UserPage';
import MovieSearch from '../MovieSearch/MovieSearch'
import MovieDisplay from '../MovieDisplay/MovieDisplay'
import NewReleasePage from '../NewReleasePage/NewReleasePage'
import DisplayMyLists from '../DisplayMyLists/DisplayMyLists';
import NewListForm from '../NewListForm/NewListForm';
import AddToList from '../AddToList/AddToList'
import List from '../List/List'
import EditRelease from '../EditRelease/EditRelease'
import EditListItem from '../EditListItem/EditListItem'


import './App.css';

class App extends Component {
  
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}

              <Route
              exact
              path="/moviesearch"
              component={MovieSearch}
            />
                          
              <Route
              exact
              path="/movie"
              component={MovieDisplay}
            />
            <ProtectedRoute
              exact
              path="/newrelease"
              component={NewReleasePage}
            />
            <ProtectedRoute
              exact
              path="/mylists"
              component={DisplayMyLists}
            />
              <ProtectedRoute
              exact
              path="/newlist"
              component={NewListForm}
            />
              <ProtectedRoute
              exact
              path="/addtolist"
              component={AddToList}
            />
              <ProtectedRoute
              exact
              path="/list"
              component={List}
            />
             <ProtectedRoute
              exact
              path="/editrelease"
              component={EditRelease}
            />
            <ProtectedRoute
              exact
              path="/editlistitem"
              component={EditListItem}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);

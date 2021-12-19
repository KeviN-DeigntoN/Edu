import './App.css';
import React from 'react'
import Header from './Components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Profile from './Components/Profile'
import CreateCourse from './Components/CreateLecture/CreateLecture'
import viewCourse from './Components/StudentViewLection/ViewLection'
import MyCourse from './Components/MyCourse/MyCourse';
import EditCourse from './Components/CreateLecture/EditCourse';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/profile' component={Profile} />
          <Route path='/test' component={EditCourse} />
          <Route path='/createcourse' component={CreateCourse} />
          <Route path='/course' component={viewCourse}/>
          <Route path='/mycourse' component={MyCourse} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}




export default App;

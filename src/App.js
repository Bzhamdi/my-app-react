import logo from './logo.svg';
import './App.css';
import ListEmployesCompents from './components/ListEmployesCompents'
import CreateEmployeeCom  from './components/CreateEmployeeCom'
import UpdateEmployeeCom from './components/UpdateEmployeeCom'
import View from './components/View'
import Header from './components/Header'
import Footer from './components/Footer';
import L from './components/L'
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>

      <Header />
      <L />
      
        <div className="container">
                
                    
                        <Switch>
                           <Route path = "/"  exact component = {ListEmployesCompents}></Route>
                          <Route path = "/employees" component = {ListEmployesCompents}></Route>
                          <Route path = "/add-employee" component = {CreateEmployeeCom}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeCom}></Route>
                          <Route path = "/view-employee/:id" component = {View}></Route>

                        </Switch>
                    
               
        </div> 
        <Footer />   
    </Router>
    </div>
  );
}

export default App;

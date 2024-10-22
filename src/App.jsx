import './App.css';
// import { useState ,useEffect} from 'react';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';

import Hpage from './Hpage';
import About from './About';
import  Contact from './Create'
import Univer from './Univer';

function App() {

// const home = ()=>{
// console.log("hello")
// }
// const about = ()=>{
//   console.log("about")
//   }
let url="https://dummyjson.com/users";




  return (
    <> 
      
      <Router>
      <Nav/>
      {/* home={home} about={about} */}
        
      
     
      <Switch>
        <Route exact path='/Home/:id' >

         <Hpage  url={url} />
       
         
        </Route>
        {/* <Route  path='/About' >

         <About url={url} />
       
         
        </Route>



        <Route  path='/Cont' >

              <Contact url={url} />


        </Route>
        <Route  path='/Uni' >

              <Univer url={url} />


        </Route> */}
      </Switch>
        
       
      
        
      </Router>

     
    </>
  );
}


export default App;

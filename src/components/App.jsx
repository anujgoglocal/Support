import React from "react";
import Navbar from "./Navbar";
import AddOn from "./AddOns";
import Support from "./Support/Support"
import RaiseTicket  from "./Support/RaiseTicket";
import Status   from "./Support/Status.jsx"

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  
  return (
      <div>
          <div className="above-navbar" >
            
            <span className="section-heading"> Support  </span> 
            <AddOn />
            
          </div>
          <Navbar title="Home"/>  
          
         
          <Router>
               <Support />
                 <Switch>
                   <Route exact path="/" >
                          <RaiseTicket />
                   </Route>
                    <Route path='/Status'  >
                        <Status />
                   </Route>
                  </Switch>
                </Router>
            
          
      </div>
  );
}

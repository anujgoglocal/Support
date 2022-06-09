import React from 'react'
import { useHistory } from "react-router-dom";


export default function Support() {

  const history = useHistory();
  
  const Ticket = () =>{ 
    let path = '/'; 
    history.push(path);
  } 

  const history1 = useHistory();
  
  const Status = () =>{ 
    let path = '/Status'; 
    history1.push(path);
  } 

  return (
    <>
       <div className="container emp-profile">
          
               {/* {/* <div className="row"> */}
                 <div className="col-md-4 ">
                    {/* <div className="profile-head"> */}
                        <ul className="nav nav-tabs" role="tablist">
                              <li className="nav-item">
                                  <a className="nav-link active"   data-toggle="tab"  href="#" onClick={Ticket}    role="tab">Raise Ticket</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link mrg-l"    data-toggle="tab"  href="#home"  onClick={Status}  role="tab">Status</a>
                              </li>
                          
                        </ul>
                    </div>
                  {/* </div>
                </div> */}
               
       </div>
    </>
  )
}

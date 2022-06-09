import React from "react";
import {ExtendedButton,SmallButton} from "./Buttons";

function Navbar(prop)
{
    return (
        <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="navbar-title">
                {prop.title}
                
                {/* <span className = "nav-button-1">
                    <ExtendedButton content="Monitor Upload Status"/>
                </span> */}

                <span className = "nav-button-2">
                    <SmallButton content="SetUp"/>
                </span>
            </div>
        </div>
    );
}

export default Navbar;
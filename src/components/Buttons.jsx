import React from "react";

function ExtendedButton(prop){

    return (<button type="button" class="btn btn-primary btn-sm extended">{prop.content}</button>);
}

function SmallButton(prop){
    
    return (
        <button type="button" class="btn btn-secondary btn-sm">{prop.content}</button>
    );
}

export {ExtendedButton,SmallButton};
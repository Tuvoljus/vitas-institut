import React, { useState } from "react";

 function M2({onChildClick, content, pushShow}) {
  
   console.log(pushShow);
    
    // console.log(onChildClick);

    return (
        <>
        <a className="nav-link" href="/" onClick={onChildClick}></a>
        <div className="collapse show" >{content}{ pushShow}</div>
        </>
    );
}

export default M2


// import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Allpage from "./reusable";

const Hpage= ({url})=>{





    return(


        <>
          
          <Allpage url={url} renderUser={(user) => <div>{user.firstName}&nbsp;&nbsp;{user.lastName}</div>} />
            
        </>
    );

}

export default Hpage;
// import { useEffect, useState } from "react";
import Allpage from "./reusable";

const Contact= ({url})=>{





    return(


        <>
          
              <Allpage url={url} renderUser={(itemm) => <div>{itemm.phone}</div>}/>
          {/* <Allpage url={url} renderUser={(userr) => <div>{userr.address.city}</div>} /> */}
            
        </>
    );

}

export default Contact;
// import { useEffect, useState } from "react";
import Allpage from "./reusable";

const About= ({url})=>{





    return(


        <>
          
          <Allpage url={url} renderUser={(userr) => <div>{userr.address.city}</div>} />
            
        </>
    );

}

export default About;
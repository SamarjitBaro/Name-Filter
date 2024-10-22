// import { useEffect, useState } from "react";
import Allpage from "./reusable";

const Univer= ({url})=>{





    return(


        <>
          
          <Allpage url={url} renderUser={(userr) => <div>{userr.university}</div>} />
            
        </>
    );

}

export default Univer;
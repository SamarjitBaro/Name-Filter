import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Allpage= ({url, renderUser})=>{


const [update, setUpdate]  =  useState();
const [load, setLoad]  = useState("Loading")

    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=> {return res.json()})
    //     .then((data)=>
            
           
    // setUpdate(data.users)
    // )
    // },[url])




    useEffect(() => {
       
        
           
setTimeout(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      // console.log(res)
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      // console.log(data.users)
      setUpdate(data.users);
    } catch (error) {
      // console.log("Error fetching data:", error.message);
      setLoad(`${error.message}`)
      
    }
  };

  fetchData(); 
}, 1000);


      }, [url]);

      const [filteredValue, setFilteredValue] = useState('');

      function values(e) {
        const val = e.target.value.toLowerCase();
        const match = update ? update.filter(item => item.firstName.toLowerCase().startsWith(val)) : [];
        
       
          setFilteredValue( match);
          
         console.log(filteredValue)

      }
     

    return(


        <>
          <div className="w-full flex items-center justify-center"><input placeholder="Search by name" type="text" className="bg-slate-200 rounded w-32 " onChange={values}/></div>
           {update? update.map(user=>(<Link to={`/Home/${user.id}`} key={user.id} ><div className=" mx-auto bg-green-400 w-40 flex items-center justify-center m-6 rounded" style={{ display: filteredValue && filteredValue.length > 0 ? 'none' : 'block' }} >{renderUser(user)}</div></Link>)):(<div className=" bg-red-500 text-white flex justify-center rounded w-[200px] m-0 mx-auto">{load}</div>)}
           {filteredValue?  <div> {filteredValue.length > 0 ? (filteredValue.map((user, index) => (<div key={index} className="mx-auto bg-green-400 w-40 flex items-center justify-center m-6 rounded">{user.firstName} {user.lastName}</div>))) : (<div>No match found</div>)} </div> :[]}
            
        </>
    );

}

export default Allpage;
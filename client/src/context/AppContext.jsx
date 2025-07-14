import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContexte = createContext();

export const AppContexteProvider = (props) => {

  const [searchFilter , setSearchFilter] = useState({
    title: '',
    location:''
  })

  const [isSearched,setIsSearched] = useState(false)
  
  const [jobs, setJobs] = useState([])

  const [showRecruiterLogin,setShowRecruiterLogin] = useState(false)
  //function to fetch jobsData
  const fetchJobs = async () => {
    setJobs(jobsData)

  }
  useEffect(()=>{
    fetchJobs()
  },[])
  
  const value = {
    // Ici tu peux mettre les données à partager
    searchFilter , setSearchFilter,
    isSearched,setIsSearched,
    jobs,setJobs,
    showRecruiterLogin,setShowRecruiterLogin
  };

  return (
    <AppContexte.Provider value={value}>
      {props.children}
    </AppContexte.Provider>
  );
};

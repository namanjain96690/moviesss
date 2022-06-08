import React,{useEffect, useState} from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const Api= "https://www.omdbapi.com?apikey=ea493709";
const Main=()=>{
  const [movies,setMovies]=useState([]);
  const [dearch,setdearch]=useState("");
  const GetApi=async (title)=>{
    const res=await fetch(`${Api}&s=${title}`);
    const data=await res.json();
   console.log(data.Search);
    setMovies(data.Search);
}
  
  useEffect(() => {
    GetApi('batman'); 
    },[]);

    return(
         <div className='app'>
               <h1>Moviesssss!!!</h1>
               <div className='search'>
                   <input 
                     placeholder='Search for movies'
                    value={dearch}
                    onChange={(e)=>{
                      setdearch(e.target.value)
                    }}                    
                   />
                   <img 
                     src={SearchIcon}
                     alt="search icon"
                     onClick={()=>{
                       GetApi(dearch)
                     }}
                   />
               </div>
               {
                 movies?.length > 0 ?(
                     <div className='container'>
                        { movies.map((movie)=>{
                            return(
                    <MovieCard  movie1={movie} />
                   )}) }
                     </div>
                 )  :
                 (
                    <div className='empty'>
                        <h2>No Movie Found</h2>
                    </div>
                 )
               }
               
             </div>
    );
}

export default Main;
import React from 'react';
import Navbar from '../components/Navbar';

const Projects = ({data}) => {
    return (
        <>
        <Navbar/>
        <div style={{width:"85%",margin:"auto"}} >
        <h1 style={{textAlign:"center"}}>PROJECTS</h1>
        <div style={{display:"grid" , gridTemplateColumns:"50% 50%"}} >
        
       {
        data.map((el)=>(
          <div key={el.id} style={{
            
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",display:"grid",gridTemplateColumns:"72% 28%",marginLeft:"21px"}} >
            <div style={{marginLeft:"11px"}} >
            <h2  >
                <img src="https://img.freepik.com/free-icon/folder-gross-symbol-interface_318-53764.jpg?size=338&ext=jpg" style={{width:"27px"}} />
                {el.name}</h2>
              <h2>
            <img src="https://img.freepik.com/free-icon/bookmarks_318-118638.jpg?size=338&ext=jpg" style={{width:"27px",marginLeft:"18px"}} />
                {el.stargazers_count}
                <span style={{marginLeft:"18%"}} >
                    <img src="https://img.freepik.com/free-icon/cloud-computing_318-925009.jpg?size=338&ext=jpg" style={{width:"27px"}} />
                    {el.forks_count}</span>
                </h2>
              

            </div>
              
              <div>

              <h2>
                <img src="https://img.freepik.com/free-icon/circle_318-891198.jpg?size=338&ext=jpg" alt="language logo" style={{width:"12px",marginRight:"11px"}} />
                {el.language}</h2>
              </div>
              
              <br/>
              <br/>
          </div>
        ))
       }
       </div>
        </div>
        </>
    );
};

export default Projects;

export async function getServerSideProps(){
  
    let username="kallol0011"
    
  
    let res=await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`)
    
    let d=await res.json()
    let d2=d.items
    return {
      props:{
        data:d2
      }
    }
  
}  
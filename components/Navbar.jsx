import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav style={{display:"flex", gap:"28px", marginLeft:"51px", marginTop:"18px"
          
        }} >
               <Link href={"/"} > <button style={{backgroundColor:"royalblue",color:"white",cursor:"pointer",paddingLeft:"18px",paddingRight:"18px",paddingTop:"7px",paddingBottom:"7px",border:"none"}} >Kallol Sarkar</button> </Link>  
               <Link href={"/projects"} >  <button style={{backgroundColor:"royalblue",color:"white",cursor:"pointer",paddingLeft:"18px",paddingRight:"18px",paddingTop:"7px",paddingBottom:"7px",border:"none"
            }} >Projects</button>  </Link>    
               <Link href={"/experience"} > <button style={{backgroundColor:"royalblue",color:"white"
            ,paddingLeft:"18px",paddingRight:"18px",cursor:"pointer",paddingTop:"7px",paddingBottom:"7px",border:"none"
            }} >experience</button>  </Link>    
            </nav>  
        </div>
    );
};

export default Navbar;
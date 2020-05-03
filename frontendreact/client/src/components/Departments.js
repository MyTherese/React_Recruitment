import React from 'react'
import './Grid.css';
import { Link } from "react-router-dom";
import finance from './pictures/finance.jpeg';
import hr from './pictures/hr.jpeg';
import it from './pictures/it.jpeg';
import managment from './pictures/managment.jpeg';
import stylist from './pictures/stylist.jpeg';
import tech from './pictures/tech.jpeg';



const Departments = () => {
  return (

    <main style={{position:'relative', borderTop: "2px solid lightGrey", top:'90px'}}>
      <h2 style={{marginLeft:'10%'}}>Departments</h2>
      <Link to ={'./formApply' }>
      <div className="container">

        {/* PRISMIC ?*/}
        <img src={finance} alt="finace" className="cell cell-1"/>
        <img src={hr} alt="hr" className="cell cell-2"/>
        <img src={it} alt="it" className="cell cell-3"/>
        <img src={managment} alt="managment"className="cell cell-4"/>
        <img src={stylist} alt="stylist" className="cell cell-5"/>
        <img src={tech} alt="tech" className="cell cell-6"/>
      </div>
      </Link>

    </main>
  )
}

export default Departments;

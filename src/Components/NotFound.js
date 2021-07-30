import React from 'react';
import {Link} from 'react-router-dom'

const NoFound =()=>{
    return(
        <div >
        <h1>Page not found</h1>
        <Link to='/Photo/Dogs'>Back to main Page</Link>
    </div>
    )
    
}
export default NoFound;
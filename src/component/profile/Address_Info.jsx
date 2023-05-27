import React ,{useState,useEffect} from 'react';
import { getData } from '../get_data/getData';

const Address_Info = () => {

   
  return (

      <div className='px-3'>
                           <table>
                            <tr>
                                <td>Street</td>
                                <td>:</td>
                                <td>Kulas Light</td>
                            </tr>
                            <tr>
                            <td>Suite</td>
                                <td>:</td>
                               <td>Apt.556</td>
                            </tr>
                            <tr>
                            <td>City</td>
                                <td>:</td>
                              <td>Gwenborough</td>
                            </tr>
                            <tr>
                            <td>Zipcode</td>
                                <td>:</td>
                               <td>92998-3874</td>
                            </tr>
                           </table>

                           <div className="map_part mt-3 ">
                           <img src="https://i.stack.imgur.com/HILmr.png" className="img-fluid border rounded" alt="..."/>
                           <p className='text-end'style={{fontSize:
                           "x-small"}}>
                            <span className='p1 fw-bold'>Lat:</span>37.319
                            <span className='p1 fw-bold'>Lang:</span>81.1496
                            </p>
                           </div>
                           </div> 
    
  )
}

export default Address_Info
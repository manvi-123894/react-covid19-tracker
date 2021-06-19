import numeral from 'numeral';
import React from 'react'
import "./Table.css"

const Table = ({countries}) => {
 return (
  <div className="table">
    {
     countries.map(({country,cases},index)=>{
       return (
        <tr key={index}>
         <td>{country}</td>
         <td>
          <strong>
           {numeral( cases).format()}
          </strong>
         </td>
         </tr>
       );
     })
    }
  </div>
 );
}

export default Table;
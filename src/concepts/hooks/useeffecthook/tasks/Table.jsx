import React from 'react'
import "./table.css"

const Table = ({data}) => {
    

  return (
    <table>
        <thead>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                data.map((ele,index)=>{
                    return(
                        <tr key={index}>
                            <td>{ele.id}</td>
                             <td>{ele.title}</td>
                              <td><img src={ele.image} alt="" /></td>
                              <td><button>Delete</button></td>

                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    
  )
}

export default Table
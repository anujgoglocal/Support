import React from 'react'

export default function Status() {
  return (
    <div className='status-menu'>
        <table class="table">
            <thead class="thead-box">
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Documents</th>
                <th scope="col">Status</th>
                
                </tr>
            </thead>
            {/* <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
               
            </tbody>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
               
            </tbody> */}
        </table>
    </div>
  )
}

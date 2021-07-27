import React from 'react'
import styled from 'styled-components'


const Decoration = styled.div `
    overflow-x:auto;

.admintable{
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

.admintable td, .admintable th {
  border: 1px solid #ddd;
  padding: 8px;
}

.admintable tr:nth-child(even){background-color: #f2f2f2;}

.admintable tr:hover {background-color: #ddd;}

.admintable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background: rgba(183, 115, 53, 0.81);
  color: white;
}

td:last-child {
    text-align:center;
}
.edit-btn {
    width:100px;
    color: whitesmoke;
    background: #204D48;
    border-radius: 5px;
    padding: 3px 20px;
    text-decoration: none;
    margin: auto;
}
`

function Admintable() {
    return (
        <Decoration>
        <div>
        <table className="admintable">
            <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Order amount</th>
                <th>Order status</th>
                <th></th>
            </tr>
            <tr>
                <td>CFF-001</td>
                <td>Thapanaphong</td>
                <td>860</td>
                <td>Waiting for confirm</td>
                <td><a className="edit-btn" href="/admin-ordercheck">Edit</a></td>
            </tr>   
            <tr>
                <td>CFF-002</td>
                <td>Thapanaphong</td>
                <td>860</td>
                <td>Waiting for confirm</td>
                <td><a className="edit-btn" href="/admin-ordercheck">Edit</a></td>
            </tr>   
            <tr>
                <td>CFF-003</td>
                <td>Thapanaphong</td>
                <td>860</td>
                <td>Waiting for confirm</td>
                <td><a className="edit-btn" href="/admin-ordercheck">Edit</a></td>
            </tr>   
            <tr>
                <td>CFF-004</td>
                <td>Thapanaphong</td>
                <td>860</td>
                <td>Waiting for confirm</td>
                <td><a className="edit-btn" href="/admin-ordercheck">Edit</a></td>
            </tr>   
            </table>   
        </div>
        </Decoration>
    )
}

export default Admintable

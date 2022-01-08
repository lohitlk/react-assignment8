import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'

function Fetch() {
    const [userData, setuserData] = useState([])


    async function fetchData(url) {
        var result;
        var status;
        await fetch(url)
            .then(response => response.json())
            .then(data => setuserData(data));
    };
    fetchData("https://jsonplaceholder.typicode.com/users")

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone NO.</th>
                        <th>Company name</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {

                            userData.map((val, idx) => {
                                return <tr key={val.id}>
                                    <td >{val.name}</td>
                                    <td >{val.email}</td>
                                    <td >{val.phone}</td>
                                    <td >{val.company.name}</td>
                                    </tr>
                            })
                        }
                </tbody>
            </Table>

        </div>
    )
}

export default Fetch


let featchData = () => {

}

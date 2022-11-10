import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [data, setData] = useState(null)
    const apiURL = 'http://94.74.86.174:8080/api/checklist';

    const getData = async() => {
        const response = await axios.get(apiURL)
        setData(response.data.data)
    }

    useEffect(() => {
        getData();
    }, [])
    return(
        <>
            <div className='container mx-auto'>
                <h2>List Checklist:</h2>
                <ul>
                    {
                        data?.map((item,index) => {
                            return (
                                <li>{item.name} | <input type='checkbox' name="checklist" checked={item.checklistCompletionStatus === true ? true : false} /></li>
                            )
                        })
                    }
                </ul>
                <div>
                    <h3>Tambah Checklist</h3>
                    <form>
                        {/* <input type="text" name='name' value={} onChange={onChange} /> */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
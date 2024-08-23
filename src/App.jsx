import React, { useEffect, useState } from 'react';
import One from './One.jsx';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import axios from 'axios';
import Add from './Add.jsx';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchdata = async () => {
        try {
            const chardata = await axios.get('https://66c66053134eb8f434977998.mockapi.io/users/guvi');
            setUsers(chardata.data);
            setLoading(false);
        }
        catch (error) {
            alert("there is an issue", error)
        }
    }

    const handleDelete = async (id) => {
        try {
           const del =  await axios.delete(`https://66c66053134eb8f434977998.mockapi.io/users/guvi/${id}`);
            setUsers(del.filter(user => user.id !== id));
            
        } catch (error) {
            console.error("There was an error deleting the user!", error);
        }
        fetchdata();
    };
    
    useEffect(() => {
        fetchdata();
    }, []);


    if (loading) {
        return <div class="d-flex justify-content-center m-4">
            <div class="spinner-border text-primary" role="status">
            </div>
        </div>
    }



    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<One users={users} handleDel={handleDelete}/>} />
                    <Route path='add' element={<Add fetchdata={fetchdata} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
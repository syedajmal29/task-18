import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Add({fetchdata}) {
    const navigate = useNavigate();
function fetchdat(){
    fetchdata()
}
    const formik = useFormik({
        initialValues: {
            id: "",
            name: "",
            username: "",
            email: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: "",
                },
            },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: "",
            },
        },
        validate:(values)=>{
            let error={};
return error
        },
        onSubmit: async (values) => {
            try {
                // Sending the form values directly
                await axios.post("https://66c66053134eb8f434977998.mockapi.io/users/guvi", values)
                .then(response => {
                    console.log(response);
                  })
                navigate(-1); 
                fetchdat()
            } catch (error) {
                console.error("Error posting data:", error);
                alert("Something went wrong while submitting the form.");
            }
        },
    });

    return (
        <div>
            <div className="modal" style={{ display: "block" }}>
                <div className="modal-dialog">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add User</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    data-bs-dismiss="modal" 
                                    aria-label="Close" 
                                    onClick={() => { navigate(-1); }}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>ID:</strong> <input type="text" name="id" value={formik.values.id} onChange={formik.handleChange} /></p>
                                <p><strong>Name:</strong> <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} /></p>
                                <p><strong>Username:</strong> <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} /></p>
                                <p><strong>Email:</strong> <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} /></p>
                                <p><strong>Street:</strong> <input type="text" name="address.street" value={formik.values.address.street} onChange={formik.handleChange} /></p>
                                <p><strong>Suite:</strong> <input type="text" name="address.suite" value={formik.values.address.suite} onChange={formik.handleChange} /></p>
                                <p><strong>City:</strong> <input type="text" name="address.city" value={formik.values.address.city} onChange={formik.handleChange} /></p>
                                <p><strong>Zipcode:</strong> <input type="text" name="address.zipcode" value={formik.values.address.zipcode} onChange={formik.handleChange} /></p>
                                <p><strong>Geo (Lat):</strong> <input type="text" name="address.geo.lat" value={formik.values.address.geo.lat} onChange={formik.handleChange} /></p>
                                <p><strong>Geo (Lng):</strong> <input type="text" name="address.geo.lng" value={formik.values.address.geo.lng} onChange={formik.handleChange} /></p>
                                <p><strong>Phone:</strong> <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} /></p>
                                <p><strong>Website:</strong> <input type="text" name="website" value={formik.values.website} onChange={formik.handleChange} /></p>
                                <p><strong>Company Name:</strong> <input type="text" name="company.name" value={formik.values.company.name} onChange={formik.handleChange} /></p>
                                <p><strong>CatchPhrase:</strong> <input type="text" name="company.catchPhrase" value={formik.values.company.catchPhrase} onChange={formik.handleChange} /></p>
                                <p><strong>BS:</strong> <input type="text" name="company.bs" value={formik.values.company.bs} onChange={formik.handleChange} /></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => { navigate(-1); }}>Close</button>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;
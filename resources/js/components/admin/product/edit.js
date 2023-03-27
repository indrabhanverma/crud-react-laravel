import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Layout from "../Layout"
import Swal from 'sweetalert2'
 
function ProductEdit() {
    const [id, setId] = useState(useParams().id)
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('')
    const [isSaving, setIsSaving] = useState(false)
 
     
    useEffect(() => {
        axios.get(`/api/products/${id}`)
        .then(function (response) {
            let product = response.data;
          
            settitle(product.title);
            setDescription(product.description);
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
        })
         
    }, [])
 
 
    const handleSave = () => {
        setIsSaving(true);
        axios.patch(`/api/products/${id}`, {
            title: title,
            description: description
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'product updated successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
        })
        .catch(function (error) {
            Swal.fire({
                 icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
        });
    }
 
 
    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Edit Project</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/productlist">View All Product
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input 
                                    onChange={(event)=>{settitle(event.target.value)}}
                                    value={title}
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                    value={description}
                                    onChange={(event)=>{setDescription(event.target.value)}}
                                    className="form-control"
                                    id="description"
                                    rows="3"
                                    name="description"></textarea>
                            </div>
                            <button 
                                disabled={isSaving}
                                onClick={handleSave} 
                                type="button"
                                className="btn btn-outline-success mt-3">
                                Update 
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default ProductEdit;
import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Layout from "../Layout"
import Swal from 'sweetalert2'
 
function productList() {
    const  [productList, setProductList] = useState([])
 
    useEffect(() => {
        fetchProductList()
    }, [])
 
    const fetchProductList = () => {
        axios.get('/api/products')
        .then(function (response) {
          setProductList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
 
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/products/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Project deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchProductList()
                })
                .catch(function (error) {
                    Swal.fire({
                         icon: 'error',
                        title: 'An Error Occured!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            }
          })
    }
 
    return (
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3"></h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-primary"
                            to="/productcreate">Create New Product
                        </Link>
                    </div>
                    
                    <div className="card-body">
             
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th width="240px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map((project, key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{project.title}</td>
                                            <td>{project.description}</td>
                                            <td>
                                                <Link
                                                    to={`/show/${project.id}`}
                                                    className="btn btn-outline-info mx-1">
                                                    Show
                                                </Link>
                                                <Link
                                                    className="btn btn-outline-success mx-1"
                                                    to={`/productedit/${project.id}`}>
                                                    Edit
                                                </Link>
                                                <button 
                                                    onClick={()=>handleDelete(project.id)}
                                                    className="btn btn-outline-danger mx-1">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default productList;
import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import Layout from "../Layout"
 
function ProjectShow() {
    const [id, setId] = useState(useParams().id)
    const [project, setProject] = useState({name:'', description:''})
    useEffect(() => {
        axios.get(`/api/admin/projects/${id}`)
        .then(function (response) {
          setProject(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
 
    return (
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3">Show Project</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/project"> View All Projects
                        </Link>
                    </div>
                    <div className="card-body">
                        <b className="text-muted">Name:</b>
                        <p>{project.name}</p>
                        <b className="text-muted">Description:</b>
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default ProjectShow;
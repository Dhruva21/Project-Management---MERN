import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQueries'
import { UPDATE_PROJECT } from '../mutations/projectMutations'
import { useNavigate } from 'react-router-dom'

export default function EditProjectForm({project}) {
    const [name, setName] = useState(project.name)
    const [description, setDescription] = useState(project.description)
    const navigate = useNavigate();
    
    const [status, setStatus] = useState('')

    // console.log(name) -> for checking 
    function addName(event){
        setName(event.target.value)
    }
    function addDescription(event){
        setDescription(event.target.value)
    }

    const [updateProject] = useMutation(UPDATE_PROJECT,{
        variables: { id: project.id, name, description, status},
        refetchQueries:[{query: GET_PROJECT, variables:{ id: project.id}}],

    });

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!name || !description || !status){
            return alert('Please fill out all fields')
        }
        updateProject(name,description,status);
        // navigate back to the home page after editing
        navigate('/');
    }
  return (
    <div className='mt-5'>
        <h3>Update project details</h3>
        <form onSubmit={onSubmit}>
            <div className='mb-3'>
            <label className='form-label'>Name:</label>
            <input type="text" className='form-control' id="name" value={name} onChange={addName}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description:</label>
                <textarea  className='form-control' id="description" value={description} onChange={addDescription}></textarea>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Status:</label>
                <select id="status" className='form-select' value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="new">Not Started</option>
                    <option value="progress">In progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

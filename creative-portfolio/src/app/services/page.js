import React from 'react';
import sql from './../../data/data.js';



export default function ServiceForm() {
  async function create(formData) {
    'use server';
     
    const projects = formData.get('projects');
  }

  return (
    <div>
      <form action={create}>
        <label>title</label><br/>
        <input type="text" placeholder="write a comment" name="project" /> <br/>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  )
}

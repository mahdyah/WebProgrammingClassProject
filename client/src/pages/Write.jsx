import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { addPost } from '../services/addPost';
import { updatePost } from '../services/updatePost';


const Write = () => {

const navigate = useNavigate();
  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const uplaod = async () => {
    try{
      const formData = new FormData();
      formData.append("file" ,file)
      const res = await axios.post("/api/upload" , formData)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  const handlePulish = async (e) => {
    e.preventDefault();
    const imgURL = await uplaod();
    const postInfo = {
      title: title ,
      desc: value ,
      cat: cat,
      img: file ? imgURL:"",


    }
    const newPostInfo = {
      title: title ,
      desc: value ,
      cat: cat,
      img: file ? imgURL:"",
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    }

   
    // eslint-disable-next-line
    {
      state ? 
      await updatePost(state.id, postInfo).then((result) => {navigate('/')}).catch((err)=>{console.log(err)})
       : 
      await addPost(newPostInfo).then((result) => {console.log(result)}).catch((err)=>{console.log(err)})
    }
  }

  return (
    <div className='add'>
      <div className="content">
          <input value={title} type='text' placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
          <div className="editorContainer">
            <ReactQuill className='editor' theme='snow' value={value} onChange={setValue}/>
          </div>
          
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibilty: </b> Public
          </span>
          <input style={{display:"none"}} type='file' name='' id='file' onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor='file'>uplaod Image</label>
          <div className="buttons">
              <button>Save As Drafts</button>
              <button onClick={handlePulish}>Publish</button>
          </div>
         
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
             <input type='radio' checked = {cat === 'art'} name='cat' value='art' id='art' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='art'>Art</label>
          </div>

          <div className="cat">
             <input type='radio' checked = {cat === 'science'} name='cat' value='science' id='science' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='science'>Science</label>
          </div> 

         <div className="cat">
           <input type='radio' checked = {cat === 'technology'} name='cat' value='technology' id='technology' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='technology'>Technology</label>
         </div>

         <div className="cat">
          <input type='radio' checked = {cat === 'cinema'} name='cat' value='cinema' id='cinema' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='cinema'>Cinema</label>
         </div>

         <div className="cat">
           <input type='radio' checked = {cat === 'design'} name='cat' value='design' id='design' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='design'>Design</label>
         </div>

          <div className="cat">
            <input type='radio' checked = {cat === 'food'}  name='cat' value='food' id='food' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='food'>Food</label>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Write
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Delete from '../Assets/delete.jpg';
import Edit from '../Assets/edit.jpg';
import Menu from '../components/Menu';
import { getPost } from '../services/getPost';
import moment from 'moment';
import { AuthContext } from '../Context/authContext';
import personLogo from '../Assets/personlogo.png';
import { deletePost } from '../services/deletePost';


const Single = () => {

  const {currentUser} = useContext(AuthContext);

  const [post , setPost] = useState({});


  const location = useLocation()

  const navigate = useNavigate();


//splitting the url so that we can get the post id 
  const postId = location.pathname.split("/")[2]

  useEffect(() => {
    const fetchData = async () =>{
      getPost(postId).then((result) => {
        setPost(result.data);

      }).catch((err) => {
        console.log(err)
      })
    };
    fetchData();
  } ,[postId])

  const handleDelete = async () => {
    deletePost(postId).then((result) => {
      navigate("/")

    }).catch((err) => {
      console.log(err)
    })
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent;
  }


  return (
    <div className='single'>

      <div className='content'>
        <img src={`../upload/${post?.img}`} alt=''/>
         <div className="user">
          <img alt='' src={post?.userImg ? post.userImg : personLogo}/>
          <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
          </div> 
       {currentUser?.username === post.username && 
            <div className="edit">
            <Link to='/write?edit=2' state={post}><img src={Edit} alt='' /></Link>
            <img src={Delete} alt='' onClick={handleDelete}/>
          </div>}
        </div>
          <h1>{post.title}</h1>
          <p>
              {getText(post.desc)}
          </p>
      </div>
   
    <Menu cat={post.cat}/>

    </div>
  )
}

export default Single
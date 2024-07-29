import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Modal from "react-modal";
import { Avatar, Button, Input } from '@mui/material';
import '../css/Navbar.css'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import  {  auth, db } from "../firebase";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
Modal.setAppElement('#root'); 


function Navbar() {
  const user = useSelector(selectUser);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  const handleQuestion = async (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  
    if (input) {
      try {
        await addDoc(collection(db, 'questions'), {
          user: {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photo: user.photo,
          },
          question: input,
          imageUrl: inputUrl,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  
    setInput('');
    setInputUrl('');
  };

  return (
    <div className='qHeader'>
      <div className='qHeader_logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"  alt="" />
      </div>
      <div className='qHeader_icons'>
        <div className='qHeader_icon'>
          <HomeIcon />
        </div>
        <div className='qHeader_icon'>
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className='qHeader_icon'>
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className='qHeader_icon'>
          <PeopleAltOutlinedIcon />
        </div>
        <div className='qHeader_icon'>
          <NotificationsOutlinedIcon />
        </div>
      </div>
      <div className='qHeader_input'>
        <SearchIcon/>
        <input type='text' placeholder='Search Quora'/>
      </div>
      <div className='qHeader_Rem'>
        <div className='qHeader_avatar'>
          <Avatar onClick={()=>auth.signOut()} src={user.photo} />
        </div>
        <LanguageIcon/>
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
                  <div className="modal_title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal_info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
            <div className="modal_scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="modal_Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal_fieldLink">
              <LinkIcon />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal_buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>  
      </div>
    </div>
  )
}

export default Navbar

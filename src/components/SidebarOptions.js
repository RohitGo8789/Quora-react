import React from 'react'
import '../css/SidebarOptions.css'
import AddIcon from '@mui/icons-material/Add';

function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
      <div className='sidebarOption'>
        <img
          src="https://cdn-icons-gif.flaticon.com/12743/12743776.gif"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/14164/14164936.gif"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/15588/15588803.gif"
          alt=""
        />
        <p>Psychology</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/15578/15578618.gif"
          alt=""
        />
        <p>Cooking</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/13936/13936795.gif"
          alt=""
        />
        <p>Music</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/11324/11324089.gif"
          alt=""
        />
        <p>Science</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/13099/13099799.gif"
          alt=""
        />
        <p>Health</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/16081/16081116.gif"
          alt=""
        />
        <p>Movies</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/11184/11184157.gif"
          alt=""
        />
        <p>Technology</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn-icons-gif.flaticon.com/12035/12035096.gif"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <AddIcon/>
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions

import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const { videoId, categoryId } = useParams();


  return (
    <div className='play-container'>
       <PlayVideo videoId={videoId}/>
       <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video



// import React from "react";
// import { useParams } from "react-router-dom";
// import "./Video.css";
// import PlayVideo from "../../components/PlayVideo/PlayVideo";
// import Recommended from "../../components/Recommended/Recommended";

// const Video = () => {
//     const { videoId } = useParams(); // ✅ Extract videoId from URL

//     return (
//         <div className="play-container">
//             <PlayVideo videoId={videoId} /> {/* ✅ Pass videoId to PlayVideo */}
//             <Recommended videoId={videoId} />
//         </div>
//     );
// };

// export default Video;


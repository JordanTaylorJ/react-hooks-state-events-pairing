import React, {useState} from "react";
import LikerButton from "./LikerButton";
import HideComment from "./HideComment";
import CommentList from "./CommentList";
import video from "../data/video.js";

function App() {
  const [commentsButton, setCommentsButton] = useState("Hide Comments");
  
  function handleCommentClick(){
    
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p> 
      <LikerButton video={video}/>
      <HideComment handleCommentClick={handleCommentClick} commentsButton={commentsButton}/>
      <CommentList video={video}/>
    </div>
  );
}

export default App;

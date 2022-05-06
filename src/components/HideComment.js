import React from "react";

function HideComment({commentsButton, handleCommentClick}){
    console.log("HideComment");
    return(
        <button onClick={handleCommentClick}>{commentsButton}</button>
    )
}
 
export default HideComment;
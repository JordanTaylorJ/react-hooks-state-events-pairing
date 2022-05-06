import React from "react";

function CommentList({video}){

    return(
        <div>
            <p>CommentList</p>
            <h2> {video.comments.user} </h2>
            <p> {video.comments.comment} </p>
        </div>
    )
}

export default CommentList;
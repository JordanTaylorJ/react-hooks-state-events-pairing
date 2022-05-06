import React, {useState} from "react";

function LikerButton({video}){
    console.log("LikerButton");
    const [upCount, setUpCount] = useState(video.upvotes)
    const [downCount, setDownCount] = useState(video.downvotes)
   
    const handleUp = () => (setUpCount(upCount + 1))
    const handleDown = () => (setDownCount(downCount + 1))

    return( 
        <div>
            <p>Liker</p>
            <button onClick={handleUp} > {upCount} 👍 </button>
            <button onClick={handleDown}> {downCount} 👎 </button>
        </div>
    )
}

export default LikerButton;
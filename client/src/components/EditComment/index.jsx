import React, { useState } from "react";
import EditCommentForm from "../EditCommentForm";
import "./index.css";

const EditComment = (props) => {
    const [child, setChild] = useState("");
    const [button, setButton] = useState("Edit");

    const HandleClick = () => {
        if(child) {
            setChild("");
            setButton("Edit");
        } else {
            setChild(<EditCommentForm body={props.body} />);
            setButton("Cancel");
        }
    }

    return(
        <>
            <button onClick={HandleClick}>{button}</button>
            {child}
        </>
    )
}

export default EditComment;
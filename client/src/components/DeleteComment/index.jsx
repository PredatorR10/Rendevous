import { checkPropTypes } from "prop-types";
import React, { useState } from "react";
import * as postService from "../../api/post.service";
import "./index.css";

const DelComment = (props) => {
    const Delete = async () => {
        let res = await postService.deleteComment(props.id).then(() => {
            props.fetchComs();
        });

        console.log(res);
    }

    return(
        <>
            <button onClick={Delete}>Delete</button>
        </>
    )
}

export default DelComment;
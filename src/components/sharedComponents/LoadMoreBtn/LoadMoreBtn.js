import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = (props) => {
    return (
        <div class="container-btn" onClick={props.onClick}>
            <div class="first">load more</div> 
        </div>

    )
}
export default LoadMoreBtn;
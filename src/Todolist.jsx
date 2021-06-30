import React from 'react';
// import './index.css';
const Todolist = (props) =>{
    return (<li id="li_item"><button id="del_btn" data-lid={props.keyid} onClick={props.onSelect}>X</button> <span id="span_text">{props.itemvalue}</span></li>);
}

export default Todolist;
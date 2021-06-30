import React ,{useState} from 'react';
import './index.css';
import  Todolist from './Todolist';
const Test = ()=>{
    let [inputVal,setInputval] = useState("");
    let [addeditems,setItems] = useState([]);
    const inputHandle = (e)=>{
        setInputval(e.target.value);
    }
    const addItems = ()=>{
        setItems((oldVal)=>{
            console.log(oldVal);
            let newdata = inputVal;
            setInputval("");
            return[...oldVal,newdata];
        });
    } 
    const deleteItem = (e)=>{
        console.log("del button clicked");
        let arrid = e.target.getAttribute("data-lid")
        console.log(e.target.getAttribute("data-lid"));
        setItems((oldval)=>{
            console.log(oldval);
            oldval.splice(arrid,1);
            return[...oldval];
        });
    }
    return (
       <>
        <div id="main_div">
            <div id="center_div">
                <h2 id="heading">ToDo List</h2>
                <div id="form_div">
                    <input type="text" id="inputField" name="itemName" value={inputVal} onChange={inputHandle} placeholder="Add a items"/>
                    <button id="sbtn" onClick={addItems}>+</button>
                </div>
                <div id="item_list">
                    <ul>
                        {addeditems.map((v,k)=>{
                           return(<Todolist 
                                key={k}
                                itemvalue={v}
                                onSelect={deleteItem}
                                keyid={k}
                            ></Todolist>);
                        })}
                    </ul>
                </div>
            </div>
        </div>
       </>   
    );
}

export default Test;
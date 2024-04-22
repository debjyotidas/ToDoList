import React, { useState } from "react";
import ToDoList from "./ToDoLists"

const Demo=()=>{
    const[newToDo,addToDo] = useState();
    const[Item, setItem]=useState([]);
    const inputToDo=(e)=>{
        addToDo(e.target.value)
    }
    // const NewItems=()=>{
    //     return setItem([...Item,newToDo]); //... implifies spread operator
    //     addToDo(" ");
    // }
    // addToDo(" ");
    const NewItems=()=>{
         setItem((oldItem)=>{
            return[...oldItem,newToDo]
         });
         addToDo("");
    }
    const deleteItems=(id)=>{
        
        setItem((oldItem)=>{
            console.log("deleted")
            return oldItem.filter((arrElem,index)=>{
                return index !==id;
                
            })
         });
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add Your Items" onChange={inputToDo} value={newToDo}/>
                <button onClick={NewItems}>+</button>
                <ol>
                    {Item.map((Items, index) => (
                      
                       <ToDoList key={index} id={index} text={Items} onSelect={deleteItems}/>
                    ))}
                
                </ol>
            </div>
        </div>
        </>
    
    );

}
export default Demo;
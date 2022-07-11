import React, {useState } from 'react';
import './color.css';

const SelectionWidget = (props) => {
    const array = props.options;
    // console.log(array.length);
  
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const colorHandler=(index) => {
      // console.log(index);
      setSelectedIndex(index);
      console.log(selectedIndex);
      // const ele = array[index];
      // console.log(ele);
    
    }

  return (
    <div className='.div'>
       {array.map((color,index)=> (
        <div className='color' key={index}>
            <span className={selectedIndex === index ? 'black' : 'red'} onClick={() => colorHandler(index)}> {color} </span>
        </div>
        ))}
    </div>
  )
}

export default SelectionWidget;
import React from 'react';
import './color.css';

const SelectionWidget = (props) => {
    const array = props.options;
    console.log(array.length);

    const colorHandler=() => {
       let a = document.getElementsByClassName('red');
            a.style.backgroundColor = 'black';
            a.style.color ='white';
    }

  return (
    <div className='.div'>
       {array.map ((color,index)=> (
        <div className='color' key={index}>
            <span className='red' onClick={colorHandler}> {color} </span>
        </div>
        ))}
    </div>
  )
}

export default SelectionWidget;
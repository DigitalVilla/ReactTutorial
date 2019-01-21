import React from 'react'
import classnames from "classnames";

const InputBox = ({label,name,type,onChange,value,error, placeholder}) => {
  console.log("input",error);
  
  return (
    <React.Fragment>
      
      <label htmlFor={name}>{label}</label>
      <input className={classnames("c",{"error":error})} name={name} onChange={onChange} type={type || "text"} value={value} placeholder={placeholder} />
      {error && 
        <div className="Feedback">{error}</div>
      }
    </React.Fragment>
  )
}

export default InputBox

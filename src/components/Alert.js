import React from 'react'



export default function Alert (props) {

  const capitalize = (word)=>
{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);  // slice(1) to take sting after 1st letter
}

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} :</strong> {props.alert.msg}  
        
    </div>
  )
}

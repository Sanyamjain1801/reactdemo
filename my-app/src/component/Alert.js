import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alert1 && <div className={`alert alert-${props.alert1.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert1.type}</strong>:{props.alert1.msg}
        
    </div>}
    </div>
  )
}

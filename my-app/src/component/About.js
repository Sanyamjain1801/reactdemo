import React from 'react'

export default function About(props) {
    // const[myStyle,setmyStyle]= useState( {
    //     color: 'black',
    //     backgroundColor: 'white'

    // })
    
    // const[btnText,setbtnText]=useState("Enable dark mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtnText("Enable light mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable dark mode")
    //     }
    // }

    let myStyle={
        color: props.mode==='dark'?'white':'#021840',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
    }
   
  return (
    <div className = "container my-3">
        <h1 style={{color: props.mode==='dark'?'white':'#021840'}}>{props.heading}</h1>
        <div className="accordion"  id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordian-header" id="headingOne">
                    <button className="accordion-button"   type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>About TextUtils</strong>
                    </button>   
                    </h2>
                   
            
                    <div id="collapseOne"  className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        <strong>This is the TextUtil.</strong>In this we can modify the text.
                    </div>
                    </div>
                </div>
        </div>
        
       </div>
    
  )
}
                


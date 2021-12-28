import React, {useState} from 'react';
import './../../App.css';


// type OnOffPropsType = {
//     value: boolean
// }

function UncontrolledOnOff() {

    let [on, setOn] = useState(false)

    const styleOn = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        padding: '3px',
        border: '1px solid black',
        margin: '1px',
        cursor: 'pointer',
        backgroundColor: on ? 'green' : 'white'
    }
    const styleOff = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        padding: '3px',
        border: '1px solid black',
        margin: '1px',
        cursor: 'pointer',
        backgroundColor: on ? 'white' : 'red'
    }
    const styleIndicator = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    return (
        <div>
            <div style={styleOn} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={styleOff} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={styleIndicator}></div>
        </div>
    )

}

export default UncontrolledOnOff
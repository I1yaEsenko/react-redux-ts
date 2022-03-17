import React, {useState} from 'react';
import './../../App.css';

type OnOffType = {
    onChange: (on: boolean) => void
}


function UncontrolledOnOff({onChange}:OnOffType) {

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

    const onClicked = () => {
        setOn(true)
        onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        onChange(false)
    }
    return (
        <div>
            <div style={styleOn} onClick={onClicked}>On
            </div>
            <div style={styleOff} onClick={offClicked}>Off
            </div>
            <div style={styleIndicator}></div>
        </div>
    )

}

export default UncontrolledOnOff
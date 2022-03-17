import React, {useState} from 'react';
import './../../App.css';


type OnOffPropsType = {
    value: boolean
    changeState: (value: boolean) => void
}

function OnOff(props:OnOffPropsType) {

    const styleOn = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        padding: '3px',
        border: '1px solid black',
        margin: '1px',
        cursor: 'pointer',
        backgroundColor: props.value ? 'green' : 'white'
    }
    const styleOff = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        padding: '3px',
        border: '1px solid black',
        margin: '1px',
        cursor: 'pointer',
        backgroundColor: props.value ? 'white' : 'red'
    }
    const styleIndicator = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        marginLeft: '5px',
        backgroundColor: props.value ? 'green' : 'red'
    }

    const onClicked = () => {
        props.changeState(!props.value)
    }

    const offClicked = () => {
        props.changeState(!props.value)
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

export default OnOff
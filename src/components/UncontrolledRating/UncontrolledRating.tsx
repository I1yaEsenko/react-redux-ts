import React, {useState} from "react";

function UncontrolledRating() {

    let [rating, setRating] = useState(0)
    const buttonRating = {
        borderRadius: '50%',
        border: '1px solid #c8c8c8',
        marginRight: '5px',
        marginBottom: '3px',
        cursor: 'pointer',
    }
    return (
        <div>
            <Star selected={rating > 0}/>
            <button style={buttonRating} onClick={() => {
                setRating(1)
            }}>1
            </button>
            <Star selected={rating > 1}/>
            <button style={buttonRating} onClick={() => {
                setRating(2)
            }}>2
            </button>
            <Star selected={rating > 2}/>
            <button style={buttonRating} onClick={() => {
                setRating(3)
            }}>3
            </button>
            <Star selected={rating > 3}/>
            <button style={buttonRating} onClick={() => {
                setRating(4)
            }}>4
            </button>
            <Star selected={rating > 4}/>
            <button style={buttonRating} onClick={() => {
                setRating(5)
            }}>5
            </button>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }

}


export default UncontrolledRating;
import React, {useState} from "react";


function UncontrolledAccordion() {

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={'Checklist'} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>

    )

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick = {() => {props.onClick()}} >{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;
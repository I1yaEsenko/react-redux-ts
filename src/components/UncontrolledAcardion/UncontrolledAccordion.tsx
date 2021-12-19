import React, {useState} from "react";


function UncontrolledAccordion() {

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={'Checklist'}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>Toggle
            </button>
            {!collapsed && <AccordionBody/>}
        </div>

    )

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
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
import React, {useState} from "react";

export type AccordionType = {
    collapsed: (value:boolean) => void
    value: boolean
}

function Accordion(props:AccordionType) {


    return (
        <div>
            <AccordionTitle title={'Checklist'} collapsed={props.collapsed} value={props.value}/>
            {!props.value && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: (value:boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => {props.collapsed(!props.value)}}>{props.title}</h3>
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

export default Accordion;
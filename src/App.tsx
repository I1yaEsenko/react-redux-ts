import React, {useState} from 'react';
import './App.css';
import Rating, {ratingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/UncontrolledAcardion/UncontrolledAccordion";
import OnOff from "./components/OnOff/OnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<ratingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState<boolean>(true )
    return (
        <div>
            <AppTitle title={'This is an Uncontrolled Rating'}/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
            <AppTitle title={'This is an Uncontrolled Accordion'}/>
            <UncontrolledAccordion/>
            <UncontrolledOnOff/>
            <AppTitle title={'This is an Controlled Accordion'}/>
            <Accordion value={accordionCollapsed} collapsed={setAccordionCollapsed}/>
            <AppTitle title={'This is an Controlled Rating'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff value={onOff} changeState={setOnOff}/>
        </div>
    );
}


function AppTitle(props: any) {
    return <h3>{props.title}</h3>
}

export default App;







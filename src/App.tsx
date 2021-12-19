import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/UncontrolledAcardion/UncontrolledAccordion";

function App() {
    return (
        <div>
            <AppTitle title={'This is an Uncontrolled Rating'}/>
            <UncontrolledRating />
            <OnOff/>
            <AppTitle title={'This is an Uncontrolled Accordion'}/>
            <UncontrolledAccordion/>
            <OnOff/>
        </div>
    );
}


function AppTitle(props: any) {
    return <h3>{props.title}</h3>
}


export default App;







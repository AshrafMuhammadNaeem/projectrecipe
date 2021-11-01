import React from 'react';
function stepsList(props) {
    const stepsListItems = props.steps.map((step, index)=>{
        return(
            <li key={index}> {step.name} </li>
        );
        
    });
        
    return(
        <ol>
            {stepsListItems}
        </ol>
    );
}
export default stepsList;
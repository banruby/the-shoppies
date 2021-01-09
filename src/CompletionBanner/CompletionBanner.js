import React, { useState, useEffect } from 'react';
import "./CompletionBanner.scss";

const CompletionBanner = (props) => {

    const { resetNoms, saveNoms, nominees } = props;
    const [ saveStatus, setSaveStatus ] = useState(false);
    const storedNoms = JSON.parse(localStorage.getItem("theShoppies"));

    // const createIdString = (arr) => {
    //     if (storedNoms) { 
    //         let idArray = [];
    //         arr.forEach(element => {
    //             idArray.push(element.imdbID)
    //         });
    //         idArray = idArray.sort().join();
    //         return(idArray);
    //     }
    // }

    // const storedString = createIdString(storedNoms);
    // const nomString = createIdString(nominees);
    // // console.log(storedString);
    // // console.log(nomString);

    // useEffect(() => {
    //     if (storedString === nomString && storedString !== undefined) {
    //         setSaveStatus(true);
    //     } else {
    //         setSaveStatus(false);
    //     }
    // }, [nominees, storedString, nomString]);

    const handleSave = () => {
        saveNoms();
    }

    return (
        <div className="completionBanner">
            <div className="wrapper">
                <h4>Your nominations are complete!</h4>
                <p>Not sure if you've got the right picks yet? Very sure?</p>
                <p>Lock in your nominations below or reset to start fresh!</p>
                <button className="primary" onClick={handleSave}>SAVE</button>
                <button className="primary" onClick={resetNoms}>RESET</button>
                {
                    saveStatus ? <button>YES</button> : <button>NOPE</button>
                }
            </div>
        </div>
    )
}

export default CompletionBanner;
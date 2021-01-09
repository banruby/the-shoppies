import React, { useState, useEffect } from 'react';
import "./CompletionBanner.scss";

const CompletionBanner = (props) => {

    const { resetNoms, saveNoms, nominees, savedNominees } = props;
    const [ saveStatus, setSaveStatus ] = useState(false); // confirms whether current nominees are saved

    const createIdString = (arr) => {
        const idArray = [];
        arr.forEach(film => {
            idArray.push(film.imdbID);
        });
        const idString = idArray.sort().join('-');
        return idString;
    }

    useEffect(() => {
        const nomineeIdString = createIdString(nominees)
        const savedIdString = createIdString(savedNominees);

        if (nomineeIdString === savedIdString) {
            setSaveStatus(true)
        } else {
            setSaveStatus(false);
        }
    }, [savedNominees, nominees]);

    return (
        <div className="completionBanner">
            <div className="wrapper">
                <h4>Your nominations are complete!</h4>
                <p>Not sure if you've got the right picks yet? Very sure?</p>
                <p>Lock in your nominations below or reset to start fresh!</p>
                <button className="primary" onClick={saveNoms}>
                    {saveStatus ? "SAVED" : "SAVE"}
                </button>
                <button className="primary" onClick={resetNoms}>RESET</button>
            </div>
        </div>
    )
}

export default CompletionBanner;
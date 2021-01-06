import React from 'react';
import "./CompletionBanner.scss";

const CompletionBanner = (props) => {

    const { resetNoms, saveNoms } = props;

    return (
        <div className="completionBanner">
            <div className="wrapper">
                <h4>Your nominations are complete!</h4>
                <p>Not sure if you've got the right picks yet? Very sure?</p>
                <p>Lock in your nominations below or reset to start fresh!</p>
                <button className="primary" onClick={saveNoms}>SAVE</button>
                <button className="primary" onClick={resetNoms}>RESET</button>
            </div>
        </div>
    )
}

export default CompletionBanner;
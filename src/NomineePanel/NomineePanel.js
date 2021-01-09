import React, { useState, useEffect } from 'react';
import NomineeCard from '../NomineeCard/NomineeCard';
import CompletionPanel from '../CompletionBanner/CompletionBanner';
import "./NomineePanel.scss";

const NomineePanel = (props) => {
    const { nominees, setNominees, removeNominee, fillPlaceholders, savedNominees, setSavedNominees } = props;
    const [bannerView, setBannerView] = useState(false);

    useEffect(() => { // changes state to render completion banner
        const nomCount = nominees.filter(nominee => nominee.imdbID);
        if (nomCount.length === 5) {
            setBannerView(true);
        } else {
            setBannerView(false);
        }
    }, [nominees]);

    const resetNoms = () => { //resets nominees and removes them from local storage
        let reset = [];
        reset = fillPlaceholders(reset)
        setNominees(reset);
        localStorage.removeItem('theShoppies');
    }

    const saveNoms = () => { // saves nominees in local storage and in state
        localStorage.setItem("theShoppies", JSON.stringify(nominees));
        setSavedNominees(nominees);
    }

    return (
        <section className="nomineePanel">
            <div className="wrapper">
                <h2>Your Shoppie Nominees:</h2>
                <ul>
                    {nominees.map((nominee, index) => {
                        return (
                            <NomineeCard 
                                key={nominee.imdbID ? nominee.imdbID : index}
                                id={nominee.imdbID}
                                title={nominee.Title}
                                year={nominee.Year}
                                poster={nominee.Poster}
                                removeNominee={removeNominee}
                            />
                        )})
                    }
                </ul>
            </div>
            {
                bannerView === true &&
                <CompletionPanel
                    resetNoms={resetNoms}
                    saveNoms={saveNoms}
                    nominees={nominees}
                    savedNominees={savedNominees}
                />
            }
        </section>
    )
}

export default NomineePanel;
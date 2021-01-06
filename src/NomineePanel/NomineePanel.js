import React from 'react';
import NomineeCard from '../NomineeCard/NomineeCard';
import "./NomineePanel.scss";

const NomineePanel = (props) => {

    const { nominees, removeNominee } = props;

    return (
        <section className="nomineePanel">
            <div className="wrapper">
                <h2>Your Shoppie Nominees:</h2>
                <ul>
                    {nominees.map((nominee) => {
                        return (
                            <NomineeCard 
                                key={nominee.imdbID}
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
        </section>
    )
}

export default NomineePanel;
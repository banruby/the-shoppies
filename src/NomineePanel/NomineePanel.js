import React from 'react';
import NomineeCard from '../NomineeCard/NomineeCard';
import "./NomineePanel.scss";

const NomineePanel = (props) => {

    const { nominees, setNominees, placeholder } = props;

    const removeNominee = (id) => {
        const updatedNominees = nominees.filter(nominee => nominee.imdbID && nominee.imdbID != id)
        console.log(updatedNominees.length)

        for (let i = updatedNominees.length + 1; i < 6; i++) {
            updatedNominees.push(placeholder);
        }
        setNominees(updatedNominees);
    }

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
                                placeholder={nominee.placeholder}
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
import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import NomineePanel from './NomineePanel/NomineePanel';
import SearchList from './SearchList/SearchList';
import Footer from './Footer/Footer';

function App() {

  const apiKey = process.env.REACT_APP_API_KEY;
  const [callStatus, setCallStatus] = useState(false); // holds the api call status
  const [searchList, setSearchList] = useState([]); // holds the array of films from search
  const [searchPreview, setSearchPreview] = useState([]); // holds the film object displayed in preview
  const [nominees, setNominees] = useState([]); // holds films added to array of nominees
  const [savedNominees, setSavedNominees] = useState([]); // holds in local storage

  const searchApi = (searchTerm) => {
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${searchTerm}`

    axios.get(apiUrl).then((resp) => {
      const status = resp.data.Response;
      if (status === "True") {
        setCallStatus(status);
        setSearchList(resp.data.Search);
        const defaultPreview = [...resp.data.Search];
        defaultPreview.length = 1;
        const newPosterData = updatePosterSize(defaultPreview)
        setSearchPreview(newPosterData);
      } else {
        setCallStatus(status);
      }
    }).catch(error => {
      window.alert(`${error} occurred. Please try your request again.`)
    })
  }

  const removeNominee = (id) => {
    let updatedNominees = nominees.filter(nominee => nominee.imdbID && nominee.imdbID !== id)
    updatedNominees = fillPlaceholders(updatedNominees)
    setNominees(updatedNominees);
  }

  const updatePosterSize = (data) => {
    const url = data[0].Poster;
    const updatedUrl = url.replace("300", "425");
    data[0].Poster = updatedUrl;
    return data;
  }

  useEffect(() => {
    if (localStorage.theShoppies) {
      const savedNoms = JSON.parse(localStorage.getItem("theShoppies"));
      setNominees(savedNoms);
      setSavedNominees(savedNoms);
    } else {
      const placeholderArray = [];
      fillPlaceholders(placeholderArray);
      setNominees(placeholderArray);
    }
  }, []); // only runs on initial load

  const fillPlaceholders = (arr) => {
    for (let i = arr.length + 1; i < 6; i++) {
      arr.push({});
    }
    return arr;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <NomineePanel
          nominees={nominees}
          setNominees={setNominees}
          removeNominee={removeNominee}
          fillPlaceholders={fillPlaceholders}
          savedNominees={savedNominees}
          setSavedNominees={setSavedNominees}
        />
        <SearchBar 
          searchApi={searchApi}
          callStatus={callStatus}
        />
        { (searchList.length > 0) &&
          <SearchList 
            searchList={searchList}
            searchPreview={searchPreview}
            setSearchPreview={setSearchPreview}
            nominees={nominees}
            setNominees={setNominees}
            updatePosterSize={updatePosterSize}
            fillPlaceholders={fillPlaceholders}
          />
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;

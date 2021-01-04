import React, { useState } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import NomineePanel from './NomineePanel/NomineePanel';
import SearchList from './SearchList/SearchList';
import Footer from './Footer/Footer';

function App() {

  const apiKey = process.env.REACT_APP_API_KEY;
  const placeholder = { placeholder: "http://placekitten.com/g/300/450" }
  // holds the value currently in the search field
  const [searchTitle, setSearchTitle] = useState('');
  // holds the list of searched titles
  const [searchList, setSearchList] = useState([]);
  // holds the film selected for preview
  const [searchPreview, setSearchPreview] = useState([]);
  // holds films added to array of nominees
  const [nominees, setNominees] = useState([placeholder, placeholder, placeholder, placeholder, placeholder]);
  //TODO: make new placeholder asset

  const searchApi = (searchTerm) => {
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${searchTerm}`

    axios.get(apiUrl).then((resp) => {
      setSearchList(resp.data.Search);
      const defaultPreview = [...resp.data.Search];
      defaultPreview.length = 1;
      const newPosterData = updatePosterSize(defaultPreview)
      setSearchPreview(newPosterData);
    }).catch(error => {
      // placeholder for error handling
      console.log(error)
      //TODO: add error handling
    })
  }

  const removeNominee = (id) => {
    const updatedNominees = nominees.filter(nominee => nominee.imdbID && nominee.imdbID != id)
    for (let i = updatedNominees.length + 1; i < 6; i++) {
      updatedNominees.push(placeholder);
    }
    setNominees(updatedNominees);
  }

  const updatePosterSize = (data) => {
    const url = data[0].Poster;
    const updatedUrl = url.replace("300", "425");
    data[0].Poster = updatedUrl;
    return data;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <NomineePanel
          nominees={nominees}
          setNominees={setNominees}
          placeholder={placeholder}
          removeNominee={removeNominee}
        />
        <SearchBar 
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          searchApi={searchApi}
        />
        <SearchList 
          searchList={searchList}
          searchPreview={searchPreview}
          setSearchPreview={setSearchPreview}
          nominees={nominees}
          setNominees={setNominees}
          placeholder={placeholder}
          updatePosterSize={updatePosterSize}
          removeNominee={removeNominee}
        />
      </main>
      <Footer />
    </div>
  );
}

//TODO: double check that all props are being used for each component

export default App;

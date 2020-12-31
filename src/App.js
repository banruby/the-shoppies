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

  const searchApi = (searchTerm) => {
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${searchTerm}`

    axios.get(apiUrl).then((resp) => {
      setSearchList(resp.data.Search);
      const defaultPreview = [...resp.data.Search];
      defaultPreview.length = 1;
      setSearchPreview(defaultPreview);
    }).catch(error => {
      // placeholder for error handling
      console.log(error)
    })
  }

  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar 
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          searchApi={searchApi}
        />
        <NomineePanel 
          nominees={nominees}
          setNominees={setNominees}
          placeholder={placeholder}
        />
        <SearchList 
          searchList={searchList}
          searchPreview={searchPreview}
          setSearchPreview={setSearchPreview}
          nominees={nominees}
          setNominees={setNominees}
          placeholder={placeholder}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

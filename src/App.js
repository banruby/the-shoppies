import { useState } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import SearchList from './SearchList/SearchList';
import Footer from './Footer/Footer';


function App() {

  const apiKey = process.env.REACT_APP_API_KEY;
  // holds the value currently in the search field
  const [searchTitle, setSearchTitle] = useState('');
  // holds the list of searched titles
  const [searchList, setSearchList] = useState([]);
  // holds the film selected for preview
  const [searchPreview, setSearchPreview] = useState([]);

  const searchApi = (searchTerm) => {
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${searchTerm}`

    axios.get(apiUrl).then((resp) => {
      setSearchList(resp.data.Search);
    }).catch(error => {
      // placeholder for error handling
      console.log(error)
    })
  }

  return (
    <div className="App">
      <Header />
      <SearchBar 
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchApi={searchApi}
      />
      <SearchList 
        searchList={searchList}
        setSearchPreview={setSearchPreview}
      />
      <Footer />
    </div>
  );
}

export default App;

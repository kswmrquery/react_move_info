import React, { useEffect, useState } from 'react';
import './App.css';

import "antd/dist/antd.css";
import {Layout} from "antd"
import SearchComponent from './Components/Search'
import MovieComponent from './Components/Movie'

const {Header, Footer, Content} = Layout;

function App() {


  const searchInvent =(searchvalue)=>{
    fetch(`https://www.omdbapi.com/?s=${searchvalue}&apikey=4a3b711b`)
    .then(res=>res.json())
    .then(data=>{
      if(data.Response === "True"){
        setMoviedata(data.Search);
        setLoading(false);
      }
      else{
        setError(data.Error);
        setLoading(false);
      }
    })
  }

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [moviedata, setMoviedata] = useState([]);

  useEffect(()=>{
      fetch('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
      .then(res=>res.json())
      .then(data=>{
        if(data.Response === "True"){
            setMoviedata(data.Search);
            setLoading(false);
        }
        else{
          setError(data.Error);
          setLoading(false);
        }
      })
  },[]);


  return (
    <div className="App">
      <Layout>
        <Header>Search Movie Infomation Engine</Header>
        <Content className="movie-content">
            <SearchComponent  search={searchInvent}></SearchComponent>
            <p  className="content-text">Sharing a few of our favourite movies</p>
            {
               loading?<div>Loading...</div>:
               error?<div>{error}</div>:
               <MovieComponent movie={moviedata}></MovieComponent>
            }
        </Content>
        <Footer style={{ textAlign: 'center' }}>Search movie project  ©2020 Created by Mrquery</Footer>
      </Layout>
    </div>
  );
}
export default App;

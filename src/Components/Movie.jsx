import React from 'react'
import "antd/dist/antd.css"
import {Image} from "antd"

const MovieComponent = (props)=>{

    const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
  
    const moviedata = props.movie;
    return (
        <div className="content-movie">
              <ul className="content-items">
                {
                moviedata.map((movie, index) =>(
                  <li key={index+1} className="content-item">
                    <div className="item-img"><Image src={movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster}></Image></div>
                    <div className="item-name">{movie.Title}</div>
                    <div className="item-year">{movie.Year}</div>
                </li>))
                }
              </ul>
        </div>
    )
}

export default MovieComponent;
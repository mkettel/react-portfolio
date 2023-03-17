import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { username } = useContext(AppContext);
  const options = {
    method: 'POST',
    url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
    params: {sign: 'sagittarius', day: 'today'},
    headers: {
      'X-RapidAPI-Key': 'ae420f499dmshca2539ee3101f7ap1242b7jsn67b84461ccc8',
      'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
  };

  const { data } = useQuery([""], () => {
    axios.request(options).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  })

  return (

  <div className="home-container">
    <h1> Hi, {username}, Welcome Home</h1>
  </div>

  )
}

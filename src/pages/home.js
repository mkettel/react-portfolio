import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { username } = useContext(AppContext);
  // Horoscope API
  const options = {
    method: 'POST',
    url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
    params: {sign: 'sagittarius', day: 'today'},
    headers: {
      'X-RapidAPI-Key': 'ae420f499dmshca2539ee3101f7ap1242b7jsn67b84461ccc8',
      'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
  };

  const { data, isLoading } = useQuery(["horoscope"], () => {
    return axios.request(options).then((res) => {
      console.log(res.data);
      return res.data;
    }).catch((err) => {
      console.log(err);
    })
  })

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <h2 className="loading"> LOADING </h2>
      </div>
    )
  }

  return (

  <div className="homeContainer">
    <h1 className="welcomeHeading"> Hi, {username}, Welcome Home</h1>
    <p> Your Horoscope for today is: {data.description} </p>
    <p>Compatibility: {data.compatibility}</p>
    <p>Color: {data.color}</p>
    <p>Lucky Number: {data.lucky_number}</p>
    <p>Lucky Time: {data.lucky_time}</p>
    <p>Mood: {data.mood}</p>

  </div>

  )
}

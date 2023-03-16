import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (

  <div className="home-container">
    <h1> Hi, {username}, Welcome Home</h1>
  </div>

  )
}

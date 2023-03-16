import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>Howdy, {username} welcome to your profile page</h1>
      <ChangeProfile setUsername={setUsername} />
    </div>
  )


}

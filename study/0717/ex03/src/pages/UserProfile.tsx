import { useContext } from "react";
import { UserContext } from "../contexts/UserContext"; 

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  const handleChange = () => {
    setUser({
      name: user.name === "user1" ? "user2" : "user1",
      age: user.name === "user1" ? 30 : 20,
    });
  };

  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <button onClick={handleChange}>사용자 변경</button>
    </div>
  );
}

export default UserProfile;

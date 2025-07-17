import { createContext, useState , useContext } from "react";

type User = {
  name: string;
  age: number;
};

// ✅ user와 setUser 둘 다 포함한 타입
type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

// ✅ 초기값 설정
const UserContext = createContext<UserContextType>({
  user: { name: "홍길동", age: 20 },
  setUser: () => {},
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    name: "user1",
    age: 20,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

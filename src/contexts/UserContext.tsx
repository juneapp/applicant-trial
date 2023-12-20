import { createContext, useState } from "react";
import type { User } from "../types";

export const UserContext = createContext<
    | {
          user: User | null;
          addUser: (userData: User) => void;
      }
    | undefined
>(undefined);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const addUser = (userData: User) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, addUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

import { createContext, useState, useEffect } from "react";
import type { User } from "../types";
import { getTokenFromCookie, decodeToken } from "../utils";

export const UserContext = createContext<
    | {
          user: User | null;
          addUser: (userData: User) => void;
          removeUser: (userId: string) => void;
      }
    | undefined
>(undefined);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = getTokenFromCookie();

        if (!token) {
            removeUser();
            return;
        }

        // Make sure the token is valid to cover different browser behaviors
        const isValid = decodeToken(token);

        if (isValid) {
            const user = localStorage.getItem("user");
            if (user) {
                setUser(JSON.parse(user));
            } else {
                setUser(null);
            }
        }
    }, []);

    const addUser = (userData: User) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const removeUser = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ user, addUser, removeUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

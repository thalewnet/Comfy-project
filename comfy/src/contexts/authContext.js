import { createContext, useState } from 'react';
import { data } from '../services/localStorage';
// axios.post('http://localhost:8000/todos',{title,status},{headers:{authorization: `Bearer ${localStorage.getItem('token')}`}})

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(data);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

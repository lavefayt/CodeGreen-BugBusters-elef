import React, { useContext } from 'react'
import { AuthContextType } from '../types/user.types';
import AuthContext from '../context/AuthContext';

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth
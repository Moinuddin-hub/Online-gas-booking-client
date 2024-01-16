import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import { AuthContext } from '../Pages/Provider/AuthProvider';


const useAuth = () => {

    const all = useContext(AuthContext)
    return all;
};

export default useAuth;
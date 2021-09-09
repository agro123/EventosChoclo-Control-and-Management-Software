import { useContext, useLayoutEffect } from 'react'
import UserContext from '../context/user/usercontext'
import { useRouter } from "next/router";


const useAuth = () => {
    const { user } = useContext(UserContext)
    const router = useRouter()

    useLayoutEffect(() => {
        console.log(router.pathname)
        !user.isAuth && router.push('/');
        if (user.isAuth) {

            switch (router.pathname) {
                case '/eventosadmin':
                    user.user.rol === 2 && router.push('/');
                    break;
                case '/modificarevento':
                    user.user.rol === 2 && router.push('/');
                    break;
                case '/register':
                    user.user.rol === 2 && router.push('/');
                    break;
                default:
                    break;
            }
        }
    }, [user])
}

export default useAuth

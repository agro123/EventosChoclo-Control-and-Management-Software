import Register from "../../components/loginregister/register";
import useAuth from '../../hooks/useauth';

const RegisterPage = () => {
    const auth = useAuth();
    return (
        <div className='contRegiType1'>
        <Register tipo = {1} />
        </div>
    )
}

export default RegisterPage

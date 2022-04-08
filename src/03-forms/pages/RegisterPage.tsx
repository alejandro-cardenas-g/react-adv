import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const initialState = {
        name: 'alejandro',
        email: 'alejandro@gmail.com',
        password1: '123456',
        password2: '123456'
    };

    const { name, email, password1, password2, data, handleChange, resetForm, isValidEmail } = useForm<IRegisterForm>(initialState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        resetForm();
    }

    return (
        <div className="">
            <h1>Register Page</h1>

            <form onSubmit={handleSubmit} noValidate>

                <input 
                    type="text"
                    placeholder="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>El email no es válido</span>}

                <input 
                    type="password"
                    placeholder="password"
                    name="password1"
                    value={password1}
                    onChange={handleChange}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener mínimo 6 caracteres</span>}

                <input 
                    type="password"
                    placeholder="Repeat Password"
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener mínimo 6 caracteres</span>}
                {password1.trim() !== password2.trim() && password2.trim().length > 0 && <span>Las contrasñeas deben ser iguales </span>}

                <button type="submit">Create</button>

            </form>
        </div>
    )
}

interface IRegisterForm {
    name: string;
    email: string;
    password1: string;
    password2: string;
}
import { useState } from "react";
import validation from "./Validation/Validation";


const Form = ({login}) => {

    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {

        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
//trabajando
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form onSubmit={handleSubmit}>

            <h1 style={{ color: "green" }}>Bienvenidos a mi APP</h1>

            <hr />

            <p>
                <label htmlFor="email" style={{ color: "black" }} > Email  </label>
                <input type="email" name='email' value={userData.email} onChange={handleChange} />
                {errors.email && <p style={{ color: "red" }}>  {errors.email}  </p>}
            </p>

            <p>
                <label htmlFor="password" style={{ color: "black" }}> Password  </label>
                <input type="text" name="password" value={userData.password} onChange={handleChange} />
                {errors.password && <p style={{ color: "grey" }}>  {errors.password}  </p>}
            </p>

            <button style={{ color: "blue" }}> Submit </button>
        </form>
    )
}

export default Form;
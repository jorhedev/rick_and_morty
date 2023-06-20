import { useState } from "react"
import styles from './Form.module.css'
import { validateEmail, validatePassword } from './validation.js';


const Form = ({onLogin}) =>{

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleOnChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        if (event.target.name === "email" || event.target.name === "password") {
            validate();
          }

    }


    const handleOnSubmit = (event) =>{
        event.preventDefault()

        onLogin(userData);
        validate();
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        onLogin(userData);
    }

    const validate = () => {
        const errors = {};
      
        // Validar el email
        const emailError = validateEmail(userData.email);
        if (emailError) {
          errors.email = emailError;
        }

          // Validar la contraseña
        const passwordError = validatePassword(userData.password);
        if (passwordError) {
         errors.password = passwordError;
        }     
      
        // Actualizar el estado de errors
        setErrors(errors);
      };

    return(
        <div className={styles.container}>
            <h1>LOGIN</h1>

            <div className={styles.box}>
                <form className={styles.form} onSubmit={handleOnSubmit}>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={userData.email} onChange={handleOnChange} />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={userData.password} onChange={handleOnChange} />
                {errors.password && <p className={styles.error}>{errors.password}</p>}                
                <button type="submit" onClick={handleSubmit} disabled={!userData.email || !userData.password || Object.keys(errors).length > 0 }>Submit</button>

            </form>
            </div>
        </div>
    )
}

export default Form;
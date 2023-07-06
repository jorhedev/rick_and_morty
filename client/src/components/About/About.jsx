import styles from './About.module.css'
import aboutProfileImage from '../../images/aboutProfile2.JPG';


const About = () =>{
    return(
    <div className={styles.container}>
        <div className={styles.aboutContent}>
            <div className={styles.reverse}>
        <img src={aboutProfileImage} alt="" />
        </div>
            <div className={styles.aboutMe}>
                <h1>Jorge Tolentino</h1> 
                <h5>Fullstack <span> Developer</span></h5>
                <p>Como desarrollador full-stack, mi experiencia se centra en el 
                    desarrollo de aplicaciones web utilizando tecnologías como React,
                    JavaScript y Redux. En el frontend, utilizo React para construir
                    interfaces de usuario interactivas y componentes reutilizables.
                    En el backend, trabajo con Node.js y otras tecnologías para desarrollar
                    API y gestionar la lógica del servidor. Tengo experiencia en el manejo del
                    estado de la aplicación utilizando Redux, lo que me permite crear aplicaciones
                    robustas y escalables. Mi objetivo es crear soluciones web eficientes y de alta
                    calidad que brinden una excelente experiencia al usuario tanto en el frontend como en el backend.
                </p>
                <button>Contactame</button>
            </div>
        </div>
    </div>
    )
}

export default About
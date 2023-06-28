import styles from './Error404.module.css'
const Error404 = () =>{

    return(
        <div className={styles.container}>
            <div className={styles.box}>
            <h1>
                Error 404
            </h1>
            <h3>Te has perdido de dimensión</h3>
            </div>
        </div>
    );
}

export default Error404;
import styles from './Card.module.css'
import { Link } from 'react-router-dom';


const Card = ({id, name, status, species, gender, origin, image, onClose}) =>{
   
   const handleOnClose = () => {
   onClose(id);
   };



   return (
      <div className={styles.container}>
         <div className={styles.box}>
         <b></b>
         <button onClick={handleOnClose}>X</button>
         <img src={image} alt='' /> 
            <div className={styles.card}>
               <Link to={`/detail/${id}`} >
               <h2 className="card-name">{name}</h2>
               </Link>  
               <h3>{status}</h3>
               <h3>{species}</h3>
               <h3>{gender}</h3>
               <h3>{origin}</h3>
         

            </div>
         </div>   
      </div>
   );
}

export default Card
import styles from './Card.module.css'

const Card = ({id, name, status, species, gender, origin, image, onClose}) =>{
   
   const handleOnClose = () => {
   onClose(id);
   };

   return (
      <div className={styles.card}>
         <button onClick={handleOnClose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' /> 
         
      </div>
   );
}

export default Card
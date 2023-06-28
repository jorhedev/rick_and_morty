import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect} from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) =>{
   
   const handleOnClose = () => {
   onClose(id);
   };

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      console.log(myFavorites);
   }, [myFavorites, id]);

   return (
      <div className={styles.container}>
         <div className={styles.box}>
         <b></b>
         
         <button  onClick={handleFavorite}>{isFav ? '❤️' :'🤍'} </button>

         <img src={image} alt='' /> 
            <div className={styles.card}>
               <Link to={`/detail/${id}`} >
               <h2 className="card-name">{name}</h2>
               </Link>  
               <h3>{status}</h3>
               <h3>{species}</h3>
               <h3>{gender}</h3>
               <h3>{origin}</h3>
         
         <button  onClick={handleOnClose}>X</button>

            </div>
         </div>   
      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites,
   }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (characters) => dispatch(addFav(characters)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
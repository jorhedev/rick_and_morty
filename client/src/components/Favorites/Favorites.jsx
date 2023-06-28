import { connect } from 'react-redux';
import Card from "../Card/Card";
import styles from './Favorites.module.css'


const Favorites = ({myFavorites}) =>{
    return(
      <div className={styles.container}>
      <div className={styles.cards}>
        {myFavorites?.map(fav=> {
            return(
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin}
            image={fav.image}
            onClose={fav.onClose}
            />
            )
        })
    }
        </div>
      </div>
    )
}


const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
  };
  
export default connect(mapStateToProps)(Favorites);


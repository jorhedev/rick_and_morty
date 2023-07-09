import { connect } from 'react-redux';
import { removeFav } from '../../redux/actions';

import Card from "../Card/Card";
import styles from './Favorites.module.css'
import Footer from '../Footer/Footer.jsx';


const Favorites = ({myFavorites, removeFav}) =>{
  const onClose = (id) => {
    removeFav(id);
  };

    return(
      <div className={styles.container}>
      <div className={styles.cards}>
        {myFavorites.map(fav=> {
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
            onClose={onClose}

            />
            )
        })
    }
        </div>
              <Footer/>
      </div>
    )
}


const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      removeFav: (id) => dispatch(removeFav(id)),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


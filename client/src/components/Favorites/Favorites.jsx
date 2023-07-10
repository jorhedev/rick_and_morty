import { connect } from 'react-redux';
import { removeFav } from '../../redux/actions';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { filterCards, orderCards, resetFav } from "../../redux/actions";

import Card from "../Card/Card";
import styles from './Favorites.module.css'
import Footer from '../Footer/Footer.jsx';


const Favorites = ({ myFavorites, removeFav}) =>{
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFav());
  }, [dispatch]);

  const onClose = (id) => {
    removeFav(id);
  };

  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
  
  const handleReset = () => {
    dispatch(resetFav());
    setOrder("");
    setFilter("");
  };

  const handleOrder = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(orderCards(value));
    dispatch(orderCards(value));
    setOrder(value);
  };

  const handleFilter = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(filterCards(value));
    setFilter(value);
  };

    return(
      <div className={styles.container}>
        <div className={styles.filter}>
        <h3>FILTER</h3>
        <select
          className={styles.buttons}
          value={order}
          onChange={handleOrder}
          name='order'
          defaultValue={""}
        >
          <option value='' disabled>
              SELECT ORDER
          </option>
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
        </select>
        <select
          className={styles.buttons}
          value={filter}
          onChange={handleFilter}
          name='filter'
          defaultValue={""}
        >
          <option value='' disabled>
            SELECT FILTER
          </option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
        </select>
        <button className={styles.buttons} onClick={handleReset}>
          RESET
        </button>
        </div>
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


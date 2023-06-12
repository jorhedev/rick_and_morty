import Card from './Card';
import './styles/Cards.css'

const Cards = ({characters}) => {

   
   return(
   <div className='cards'>
      {
      characters.map(({id, name, status, species, gender, origin, image}) => (
      <Card
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         onClose={() => alert('Emulamos que se cierra la card')}

      />
      ))
      }
   </div>
   );
}

export default Cards
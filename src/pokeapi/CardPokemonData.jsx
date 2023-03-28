import Card from 'react-bootstrap/Card';
import { LoaderData } from './LoaderData';

function CardPokemonData({ pokemonInfo, loadingItem }) {

    return (
        <>
            {(pokemonInfo && loadingItem !== true)  &&
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pokemonInfo.image} style={{ height: '150px' }} />
                    <Card.Body>
                        <h3 className='text-center'>{pokemonInfo.name.toUpperCase()}</h3>
                        <Card.Title>Some moves:</Card.Title>
                        <Card.Text>
                            {pokemonInfo.moves.slice(0, 10).map((move) => <span>{move}, </span>)}
                            and more...
                        </Card.Text>
                    </Card.Body>
                </Card>
            }
            {loadingItem && <LoaderData/>}
        </>


    );
}

export default CardPokemonData;
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
    const { imgSrc, name } = pokemon
    return (
        <figure className="card">
            {imgSrc ? <img className="card-img" src={imgSrc} alt={name}></img> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}



export default PokemonCard;
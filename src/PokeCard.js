import "./Pokecard.css"
const Pokecard = (props) => (
    <div className="pokecard">
        <h1 className="pokecard-name">{props.name}</h1>
        <img className="pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=""></img>
        <p className="pokecard-text">Type: <b>{props.type}</b></p>
        <p className="pokecard-text">EXP: <b>{props.xp}</b></p>
    </div>
)
export default Pokecard
import  './Card.css';

export default function Card (props){
    return(
        <div>
            <p> Name:{props.name}</p>
            <img src={props.image} alt={props.name}/>
            <p>Description: {props.abstrac}</p>
        </div>
    )
}
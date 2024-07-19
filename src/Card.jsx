function Card(props){
    return (
        <div className="card" id={props.id}>
            <img className='card-img' src={props.pic} alt="Profile picture"></img>
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-text'>
                {props.text}
            </p>
        </div>
    );
}

export default Card;
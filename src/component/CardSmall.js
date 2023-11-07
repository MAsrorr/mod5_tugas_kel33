import "./CardSmall.css";

export default function CardSmall(props) {

    if (!props) {
        return <div className="container">No movie data available.</div>;
    } 
   
    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.img} alt="" className="photo" />
            <div className="description">
                <div>
                    <p id="title">{props.title}</p>
                    <p id="genre">{props.genre}</p>
                </div>
            </div>
        </div>
    );
}

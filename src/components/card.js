const Card = (props) => {
    return (
        <div className="content" >
            <img className="image" alt="" src={props.img} />
            <p> {props.title} </p>
            <button className="btn" onClick={()=>props.con(props.title)}>click</button>
            {/* <button className="btn" onClick={()=>props.con(props.title)}>click</button> */}
        </div>
    )
};

export default Card 


const Alert = (props) => {
    return (
        <div className="alert" >
            <img className="image_alert" alt="" src={props.img} />
            <h3 className="h3_alert">You Don't Have Any Result About Your Search ! OOPS </h3>
        </div>
    )
}

export default Alert
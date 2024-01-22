const click = ()=>{
    return alert("dfvdfv");
}
const onchange = (e)=>{
    return console.log(e.nativeEvent.data);
}

const Page = () => {
    return (
        <>
            <h3 className="h3_input">
                Please Enter Any Thing You Want :
            </h3>
            <input className="input1" type="text" onChange={onchange} /> <br/>
            <button className="btn_input" onClick={click}>Click</button>
        </>
    )
}

export default Page
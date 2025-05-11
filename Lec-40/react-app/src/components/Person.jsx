
const Person = (props) => {

    const style = {
        border: "2px solid black",
        backgroundColor: "lightblue"
    }

    return (
        // fragment element
        <div style={style}>
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Profession: {props.profession}</p>
        </div>
    )
}

export default Person
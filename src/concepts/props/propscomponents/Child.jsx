
const Child=(props)=>{

    console.log(props);

    return  <div>
                <h1>{props.name}</h1>
                <p>age:{props.age}</p>
                <p>email:{props.email}</p>
                <hr />
            </div>
}

export default Child
import { Fragment } from "react"

const ReactFragments=()=>{
let arr=['Ariya','Arati','Abhi']

    return(

        <>
            {/* <h1>{arr[0]}</h1> */}
            {/* <ul>
                {
                    arr.map((ele)=>{
                        return(
                            <>
                            <li>{ele}</li>
                            <a href="">{ele}</a>
                            </>
                        )
                    })
                }
            </ul> */}
            <Fragment>
                <h1>hii</h1>
            </Fragment>
            </>
    )
}
export default ReactFragments
import { Fragment } from "react"

const ListAndKeys = () => {
    let arr = ['Ariya', 'Arati', 'Siddharth', 'Soumya', 'Soumyajeet', 'Omm', 'Abhi']
    return (
        <div>
            {
                arr.map((ele, index) => {
                    return (
                        <Fragment key={index}>
                            <h1>{ele}</h1>
                            <p>ii</p>

                        </Fragment>
                        // <h1 key={index}>{ele}</h1>
                    )
                })
            }
        </div>
    )
}
export default ListAndKeys
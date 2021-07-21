import React from 'react'
export default props => {
    return (
        <div>
            {props.product.map((prod, idx) => {
                return <p key = {idx}> {prod.title}, {prod.price}, {prod.description}</p>
            })}
        </div>
    )
}
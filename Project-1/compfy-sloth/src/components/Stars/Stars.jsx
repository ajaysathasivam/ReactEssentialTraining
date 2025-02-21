import React from 'react'

export const Stars = ({rate,color}) => {
    let tem =[]
    for (let index = 1; index <=5; index++) {
        tem.push(
            <i className={"bi bi-star mx-1 "+color}></i>
        )
        
    }
    return (
        <>
            {[...tem]}
        </>
    )
}

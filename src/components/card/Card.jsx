import React from 'react'
import './card.scss'

const Card = props => {
    const className = {
        card: 'card',
        purple: props.purple && 'card-purple',
        fullheight: props.fullheight && 'box-fullheight'
    }

    return (
        <div className={Object.values(className).join(' ')}>
            {props.children}
        </div>
    )
}

export default Card

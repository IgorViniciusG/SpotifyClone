import React from 'react'
import SingleItem from './SingleItem'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const itemList = ({ tittle, items, itemsArray, path, idPath }) => {

  const { pathname } = useLocation()
  const isHome = pathname === "/"
  const finalItems = isHome ? items : Infinity

  return (
    <div className="item-list">
      <div className='item-list__header'>
        <h2>{tittle} Populares</h2>

        {isHome ? (<Link className="item-list__link" to={path}>Mostrar tudo</Link>) : (<></>)}

      </div>

      <div className="item-list__container">
        {itemsArray.filter((currentValue, index) => index < finalItems).map((currObj, index) => (<SingleItem {...currObj} idPath={idPath} key={`${tittle}-${index}`} />))}
      </div>
    </div>
  )
}

export default itemList
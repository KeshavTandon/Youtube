import React from 'react'
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Music"/>
      <Button name="Mixes"/>
      <Button name="Live"/>
      <Button name="Bhajan Music"/>
      <Button name="News"/>
      <Button name="Body-Building"/>
      <Button name="Computer Programming"/>
      <Button name="Sports"/>
      <Button name="Movie"/>
    </div>
  )
}

export default ButtonList;
import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Header from '../../header/Header'
import './Start.css'

export default function Start() {
  return (
    <div>
        <Header></Header>
        <div className='container'>
            <h2>create your test!</h2>
            <Button variant="outline-dark" className='button_enter'>Create test</Button>
        </div>
        
    </div>
  )
}

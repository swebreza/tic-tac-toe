import React, { useState } from 'react'
import Icon from './components/Icon'
import { ToastContainer, toast } from 'react-toastify'
import { Card, CardBody, Button, Col, Row, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const itemArray = new Array(9).fill('empty')

const App = () => {
  const [isCross, setIsCross] = useState(false)
  const [WinMessage, setWinMessage] = useState('')

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage('')
    itemArray.fill('empty', 0, 9)
  }
  const checkIsWinner = () => {
    if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
    } else if (
      itemArray[3] !== 'empty' &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] === itemArray[4]
    ) {
      setWinMessage(`${itemArray[3]} wins`)
    } else if (
      itemArray[6] !== 'empty' &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`)
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
    } else if (
      itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`)
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`)
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
    }
  }
  const changeItem = (itemNumber) => {
    if (WinMessage) {
      return toast(WinMessage, { type: 'success' })
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle'
      setIsCross(!isCross)
    } else {
      return toast('Already Filled', { type: 'error' })
    }
    checkIsWinner()
  }
  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={7} className='Offset-md-3 '>
          {WinMessage ? (
            <div className='p-2'>
              <h1 className='text-primary text-uppercase text-center'>
                {WinMessage}
              </h1>
              <Button color='success' block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className='text-center text-warning'>
              {isCross ? 'Cross' : 'Circle'} turns
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => (
              <Card color='warning' onClick={() => changeItem(index)}>
                <CardBody className='box'>
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App

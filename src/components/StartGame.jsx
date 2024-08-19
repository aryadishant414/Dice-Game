import styled from 'styled-components'
import { Button } from '../styled/Button.js';

// Before starting the game logic code here
const StartGame = ({toggle}) => {

  return (
    <Container>
      <div><img src="/images/dices.png" /></div>

      {/* <div className='content'> // This is also ok but hamne iska bhi alg hee styled component bana diya hai iske jjust niche dekho
    h1 { 
        <h1>
          DICE GAME
        </h1>
        <Button>Play Now</Button>
      </div> */}
      
      <Content>
        <h1 className='content-heading'>
          DICE GAME
        </h1>
        <Button onClick={toggle}>Play Now</Button>
      </Content> 
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  /* .content { This is also ok but hamne iska bhi alg hee styled component bana diya hai iske jjust niche dekho
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  } */

`

const Content = styled.div`
  .content-heading {
    font-size: 96px;
    white-space: nowrap;
  }
`


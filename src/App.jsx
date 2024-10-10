import styled from 'styled-components'
import './App.css'
import CardList from './CardList'

function App() {

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <h1>Welcome human!</h1>
      <CardList/>
    </Wrapper>
  )
}

export default App

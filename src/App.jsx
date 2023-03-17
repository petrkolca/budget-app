import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import { GlobalStyles } from './components/styles/GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      {/* <GlobalStyles /> */}
      <Container>
        <h1>Spend Wise</h1>
      </Container>
    </Fragment>
  )
}

export default App

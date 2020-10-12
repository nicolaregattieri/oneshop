import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { Container } from "react-bootstrap"
import Header from  './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
   
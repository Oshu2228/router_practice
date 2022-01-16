import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
import Second from './pages/Second'
import SecondChild from './pages/SecondChild'
import Third from './pages/Third'

const App = () => (
  <BrowserRouter>
    <h1>react-routerに入門する。</h1>
    <nav>
      <ul>
        <li><Link  to='/'>Index</Link></li>
        <li><Link  to='/second'>Second</Link></li>
        <li><Link to='/second/neko'>Second-neko</Link></li>
        <li><Link to='/third'>Third</Link></li>
      </ul>
    </nav>
    <article>
      <Route exact path='/' component={Index} />
      <Route exact path='/second' component={Second} />
      <Route path='/second/:id' component={SecondChild} />
      <Route path='/third' component={Third} />
    </article>
  </BrowserRouter>
)





export default App
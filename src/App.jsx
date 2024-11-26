import React , {Component} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sectionmain from './components/Sectionmain/Sectionmain'
import Sectionsecond from './components/Sectionsecond/Sectionsecond'
import Sectionthird from './components/Sectionthird/Sectionthird'
import Sectionfourth from './components/Sectionfourth/Sectionfourth'
import Sectionfifth from './components/Sectionfifth/Sectionfifth'
import Sectionsixth from './components/Sectionsixth/Sectionsixth'
// Orimport { Component } from 'react'
class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <Sectionmain />
      <Sectionsecond />
      <Sectionthird />
      <Sectionfourth />
      <Sectionfifth />
      <Sectionsixth />
      <Footer />
    </div>
  )
}
}
export default  App 


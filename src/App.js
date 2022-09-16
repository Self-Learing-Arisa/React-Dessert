import './App.css'
import {useState} from 'react'
import Header from './components/Header'
import Item from './components/Item'
import desserts from './data/desserts'
import Popup from './components/Popup'
import Search from './components/Search'

function App() {
  const [selectedDessert, setSelectedDessert] = useState(null)
  const [search, setSearch] = useState('')

  const filterElements = desserts.filter((item) => {
    return item.title.includes(search)
  })
  const dessertElements = filterElements.map((item, index) => {
    return <Item key={index} dessert={item} openPopup={onPopupOpenClick} />
  }) 

  let dessertPopup = null
  if(selectedDessert) {
    dessertPopup = <Popup dessert={selectedDessert} closePopup={onPopupCloseClick} /> 
  }

  function onPopupOpenClick(dessert) {
    setSelectedDessert(dessert)
  }

  function onPopupCloseClick() {
    setSelectedDessert(null)
  }

  return (
    <div className="App">
      <Header />
      <Search value={search} onValueChange={setSearch} />
      <div className="grid-item" v-for="item in desserts">
        {dessertElements}
      </div>
      {dessertPopup}
      {/* <button onClick={() => onPopupOpenClick(desserts[4])}>click me</button> */}
    </div>
  )
}

export default App

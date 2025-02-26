import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/checkbox'
import { ProductCategoryRow } from './components/products/productCategoryRow'
import { ProductRow } from './components/products/productRow'

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"} 
]
function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] =  useState("")

  const visibleProducts = PRODUCTS.filter(product=>{
    if(showStockedOnly && !product.stocked){
      return false
    }

    if(search && !product.name.includes(search)){
      return false
    }
    else {
      return true
    }
  })

  return <div className='container my-3'>
      <SearchBar 
      showStockedOnly={showStockedOnly} 
      onStockedOnlyChange={setShowStockedOnly} 
      search={search} 
      onSearchChange={setSearch}
      />
      <ProductTable products={visibleProducts}/>
    </div>
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}){
  return <div>
    <div className="mb-3">
      <Input value={search} onChange={onSearchChange} placeholder="rechercher..."/>
      <Checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange} label="produits en stock"/>
    </div>
  </div>
}

function ProductTable({products}){
  const rows = []
  let lastCategory = null
  for(let product of products){
    if(product.category !== lastCategory){
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }
  return <table className="table">
    <thead>
      <tr>
        <th>NOM</th>
        <th>PRIX</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>

}
export default App

import itemsList from '../items/items'

const Slider = () => {
  return ( 
  <div className="container">
        {itemsList.forEach(el => {<img src={el.url} alt={el.name} />})}
    </div>
  )
}

export default Slider
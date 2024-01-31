/*

Phase 2 -> Props
By Sakib Rasul
Updated January 29, 2024
Created July 31, 2023

Core Deliverables
1. Create an array of items to sell in a boba shop.
2. Create a shop layout in <App>.
3. Define a <Item> component that displays one item.
4. Render our array of items as a list of <Item> components.

*/
import Item from "./Item";

function App() {
  const shopName = "Kirstyn's Boba Shop"
  const items = [
    {
      id: 1,
      name: "Brown Sugar Milk Tea",
      price: 10
    },
    {
      id: 2,
      name: "Fancy Water",
      price: 0
    },
  ];
  return (
    <div>
      <h1>{shopName}</h1>
      {items.map(item => <Item key={item.id} item={item} />)}
      {/* key is a unique identifier for an item in a list of components
      the first item is the individual item in the array, then "Item" is the function, then item is the singular component, then {item} is the transformed "item" at the beginning of the .map */}
    </div>
    // <div>
    //   <h1>{shopName}!!</h1>
    //   <Item name={items[0].name} price={items[0].price} />
    //   <br/>
    //   <Item name={items[1].name} price={items[1].price} />
    // </div>
  )
}

export default App;
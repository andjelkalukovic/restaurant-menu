import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import items from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) =>{
    if (category === 'all'){
      setMenuItems(items)
      return
    }  
    let newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems);
  }

  return (
    <main className='container'>
      <h1 className='text-center p-4'>Menu</h1>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </main>
  );
}

export default App;

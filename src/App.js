import React from 'react'
import { RegularList } from './RegularList';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallProductListItem } from './products/SmallProductLisItem';
import { LargeProductListItem } from './products/LargeProductListItem';
import { NumberedList } from './NumberedList';
const people=[
  {
  name:"john doe",
  age:53,
  hairColor:'brown',
  hobbies:['swimming','cycling','video games']
}, 
  {
  name:"kevin doe",
  age:20,
  hairColor:'blue',
  hobbies:['watching','cycling','video games']
}, 
  {
  name:"jane doe",
  age:12,
  hairColor:'black',
  hobbies:['cooking','cycling','video games']
}, 

]
const products =[
  {
    name: 'flat-screen tv',
    price:'$300',
    description:'huge flat screen',
    rating: 4.5
  },
  {
    name: 'basket ball',
    price:'$100',
    description:'just like pros use',
    rating: 3.8
  },
  {
    name: 'gas cylinder',
    price:'$120',
    description:'state of the art cyinder',
    rating: 4.2
  },
]
const App = () => {
  return (
    <div>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />

      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem }
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem }
      />
    </div>
      
    
  )
}

export default App
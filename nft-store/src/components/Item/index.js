import { Link } from 'react-router-dom';
import { CardItem } from '../Card';


export const Item = ({items}) => {

  return (
    <>
    {
      items.map((item) => {
        return <>
        <Link to={`/item/${item.id}`} style={{display:'inline-block',  margin:'35px'}} className='link'>
          <CardItem key={item.id} item={item} width = {400} height = {350}>
          </CardItem>
      </Link>
      </>
      })

    }

 
  
      
    </>
  )
}
  


import React, { useEffect, useState } from 'react';
import { CardItem } from '../Card';
import { ItemCount } from '../ItemCount';

export const ItemDetail = ({item}) => {
  return (
    <>
    <div style = {{margin:'20px', textAlign:'center'}}>
      <CardItem item={item} width={600} height={550} ></CardItem>
      <ItemCount></ItemCount>
    </div>
    </>
  )
}

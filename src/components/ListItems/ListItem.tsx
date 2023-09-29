import React from "react";
import './ListItem.css'


interface ListItemProps {
    item: {
        'name':string,
        'status':string
    };
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
    const { name, status} = item
    console.log(item)
    return (
            <div className='list-items'>
                <div className='list-items--name'>{name}</div>
                <div className='list-items--status'>{status}</div>
            </div> ) 
}
export default ListItem;
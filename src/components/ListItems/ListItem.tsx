import React from "react";
import './ListItem.scss'
import { DocInfo } from "../../App";

interface ListItemProps {
        docInfo:DocInfo
}

const ListItem: React.FC<ListItemProps> = ({docInfo}) => {
    const { docType, docStatus} = docInfo
    console.log(docInfo)
    return (
            <div className='list-items'>
                <div className='list-items--name'>{docType}</div>
                <div className='list-items--status'>{docStatus}</div>
            </div> ) 
}
export default ListItem;
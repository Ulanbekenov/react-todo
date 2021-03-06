import React from "react";
import './List.scss';
import classNames from "classnames";
import Badge from "../Badge";

const List = ({items, onClick}) => {
    return (
        <ul className="list">
           {items.map((item, index) => 
            <li onClick={onClick} key={index} className={classNames(item.className, {active: item.active})}>
                 <i>
                    {item.icon ? (item.icon) : 
                        (<Badge color = {item.color}/> )
                    }
                 </i>
                <span>{item.name}</span>
            </li>
           )}
        </ul>
    );
}

export default List;
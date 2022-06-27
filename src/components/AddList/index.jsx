import React, { useState } from "react";

import './AddListButton.scss';
import List from "../List";
import Badge from "../Badge";

import closeSvg from '../../assets/img/close.svg'

const AddListButton = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);

    const onVisible = () => {
        setVisiblePopup(true);
    }
    return (
        <div className="add-list">
            <List onClick={onVisible} items={[
                {
                    className: "list__add-button",
                    icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    ,
                    name: 'Добавить список',
                },
            ]} />
            {visiblePopup && <div className="add-list__popup">
                <img 
                    onClick={() => {setVisiblePopup(false)}}
                    className="add-list__popup-close-btn" 
                    src={closeSvg} 
                    alt="close butoon" />
                <input className="field" type="text" placeholder="Название списка" />
                <div className="add-list__popup-colors">

                    {colors.map(color => (
                        <Badge onClick={() => selectColor(color.id)}
                               key={color.id}
                               color={color.name} 
                               className={selectedColor === color.id && 'active'}
                        />
                    ))}
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    )
}

export default AddListButton;
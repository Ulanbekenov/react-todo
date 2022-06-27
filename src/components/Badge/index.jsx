import React from 'react'

import './Badge.scss'

const Badge = ({ color, onClick }) => <i onClick={onClick} className={`badge badge--${color}`}></i>

export default Badge;

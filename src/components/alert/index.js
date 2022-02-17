import React from 'react';
import img12 from '../../img/12.png';
import './alert.scss';

const Alert = () => {
    return (
        <div>
            <img src={img12} alt='error'></img>
            <span>Dành cho người chơi trên 12 tuổi. Chơi quá 180 phút mỗi ngày sẽ hại sức khỏe.</span>
        </div>
    )
}

export default Alert;
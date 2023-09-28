import React from 'react';
import './token.css';
export default BadgeRibbon = () => {
    return (
        <div className='badge-ribbon '>
            <div style={styles.badgeRibbonCircle} />
            <div style={styles.badgeRibbonNeg140} />
            <div style={styles.badgeRibbon140} />
        </div>
    );
};


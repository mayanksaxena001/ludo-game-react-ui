import React from 'react';
import './token.css';
export default BadgeRibbon = () => {
    return (
        <View style={styles.badgeRibbon}>
            <View style={styles.badgeRibbonCircle} />
            <View style={styles.badgeRibbonNeg140} />
            <View style={styles.badgeRibbon140} />
        </View>
    );
};


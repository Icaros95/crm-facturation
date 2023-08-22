//import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

const styles = {
    row: {
        margin: '1.5em',
        width: '95%',
    }
};


export default function SkeletonList() {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                <Skeleton key={i} variant='rectangular' style={styles.row} height={45} />
            ))}
        </>
    );
};
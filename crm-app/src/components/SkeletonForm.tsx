import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

// used as a mask when loading the page / content of a form => remove this comment later
const styles = {
    row: {
        margin: '1.5em',
        // width: 300,
    },
};


interface SkeletonFormProps {
    withList?: boolean;
}

const SkeletonForm: React.FC<SkeletonFormProps> = ({ withList }) => {
    return (
        <Grid container>
            {[1, 2, 3].map( i => 
                [1, 2, 3].map( e => (
                    <Grid item key={e} xs={12} sm={4} >
                        <Skeleton key={e} variant='rectangular' style={styles.row} height={50} />
                    </Grid>
                ))
            )}
            { withList && (
                <React.Fragment>
                    <Grid item xs={12} sm={4} >
                        <Skeleton variant='rectangular' style={styles.row} height={20} />
                    </Grid>
                    <Grid item xs={12} >
                        <Skeleton variant='rectangular' style={styles.row} height={50} />
                    </Grid>
                </React.Fragment>
            )}
        </Grid>
    );
};

export default SkeletonForm;
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';


const styles = {
    navigation: {
        fontSize: 15,
        fontWeight: 400,
        color: grey[500],
        paddingBottom: 15,
        display: 'block',
    },
    title: {
        fontSize: 24, 
        fontWeight: 500,
        marginBottom: 20,
    },
    paper: {
        padding: 10,
    },
    main: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
    },
    clear: {
        clear: 'both' as any
    }
}

interface PageBaseProps {
    title: string,
    navigation: string,
    children: React.ReactElement | null
};

const PageBase: React.FC<PageBaseProps> = ({ title, navigation, children}) => {
    return (
        <div style={styles.main}>
            <span style={styles.navigation}>{navigation}</span>

            <Paper style={styles.paper}>
                <h3 style={styles.title}> {title} </h3>

                <Divider />
                {children}

                <div style={styles.clear} />
            </Paper>
        </div>
    );
};


export default PageBase;
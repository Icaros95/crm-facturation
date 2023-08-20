import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Tooltip from '@mui/material/Tooltip';
import ContentCreate from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';



const styles = {
  columns: {
    width10: {
      width: 15,
    }
  },
  row: {
    margin: "1.5em",
    width: "95%",
  },
  pagination: {
    width: 300,
    margin: "3 auto",
    paddingTop: 20,
  },
};


interface DataTableProps {
    model: string;
    items: { [key: string]:any }[];
    totalPages: number;
    page: number;
    headers: string[];
    dataKeys: string[];
    onPageChange: (_event: React.ChangeEvent<unknown>, page: number) => void;
    // onDelete: (_event: React.ChangeEvent<unknown>, id?: number) => void;  // activar en cuanto se definan los recursos requeridos en la pagina de uso (requiere un evento dado en la pagina contenedora del componente(onDelete))
}

function DataTable(props: DataTableProps) {
    const renderData = (dataKey: string, data: any) => {
      if(dataKey === 'user') {
        return <PersonOutlinedIcon />
      }  
      else if (dataKey === 'actions') {
        return (
          <>
            <Tooltip title='edit' aria-label='edit'>
                <IconButton size='small' href={ props.model && props.model.includes('?path=/story/') ? `${props.model}` : `${props.model}/${data.id}`} >
                    <ContentCreate />
                </IconButton>
            </Tooltip>
            <Tooltip title='Delete' aria-label='delete'>
               {/* <IconButton size='small' defaultValue={data.id} onClick={(e) => props.onDelete(e, data.id)} > */}
               <IconButton size='small' defaultValue={data.id} onClick={() => console.log('e, data.id')} >
                    <DeleteOutlineOutlinedIcon />
               </IconButton>
            </Tooltip> 
          </>
        );
        } else {
            if(dataKey.includes('.')) {
                const keys = dataKey.split('.');

                return <>{data[keys[0]][keys[1]]}</>;
            } else {
                return <>{data[dataKey]}</>
                }
            }
        };

  
    const headerCount = props.headers.length;
    let headerArray = [];
    for(let i = 0; i < headerCount; i++){
      headerArray.push(props.headers[i]);
    } 

    return (
        <React.Fragment>
          <Paper sx={{ p: 2}}>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        {props.headers.length > 0 &&
                            headerArray.map((header:string ) => (
                                <TableCell key={header} component='th' style={styles.columns.width10} >
                                    {header}
                                </TableCell>
                            ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.items.length > 0 ? (
                        props.items.map((item:any) => (
                            <TableRow key={item.id}>
                                {props.headers && 
                                props.dataKeys.map((dataKey:any) => (
                                    <TableCell key={dataKey} component='th' style={styles.columns.width10} >
                                        {renderData(dataKey, item)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={headerCount}>
                                <p style={{ textAlign: 'center'}}> No Data Found!</p>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {props.items.length > 0 && (
                <Container style={styles.pagination}>
                    <Pagination 
                        count={props.totalPages}
                        page={props.page}
                        variant='outlined'
                        color='standard'
                        onChange={props.onPageChange}    
                    />
                </Container>
            )}
          </Paper>
        </React.Fragment>
    );
}


export default DataTable;

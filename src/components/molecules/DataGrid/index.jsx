import React, { useState, useEffect }  from 'react';
import PropTypes from "prop-types";
import { useQuery, useQueryClient } from 'react-query';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import DataGridHead from '../DataGridHead';
// import projectConfig from '../../../project.json';


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    }
  }));

  function DataGrid(props) {
    
    const { 
        rowsPerPage, 
        totalEntries, 
        config, 
        defaultKey='id', 
        dataSourceId,
        defaultSortColumn,
        defaultSortOrder,
        queryRef,
        onRowClick=f=>f,
        dataSource } = props;    
       
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [sort, sertSort] = useState(`${defaultSortColumn} ${defaultSortOrder}`);
    const [order, setOrder] = useState(defaultSortOrder);
    const [orderBy, setOrderBy] = useState(defaultSortColumn);
    const [selected, setSelected] = useState([]);
    const [perPage, setPerPage] = useState(10);        
    queryRef.current = [dataSourceId, sort, page, perPage]
    const { 
        data, 
        isLoading, 
        isFetching, 
        isError, 
        refetch,
        error } = useQuery(
            [dataSourceId, sort, page, perPage], 
            () => fetchDataSource(sort, page, perPage), 
            { staleTime: 2000, refetchOnWindowFocus: true  }
        );

    useEffect(() => {
        queryRef.current = [dataSourceId, sort, page, perPage]
    }, [sort, page, perPage]);

    const fetchDataSource = async (sort, offset, limit) => {      
        const params = {
            sort,
            offset: offset-1,
            limit 
        }
        return await dataSource(params);
    }   
    const handleRequestSort = (event, property) => {        
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);        
        sertSort(`${orderBy} ${order}`); 
    };

    const handleSelectAllClick = (event) => {
        // if (event.target.checked) {
        //     const newSelecteds = rows.map((n) => n.name);
        //     setSelected(newSelecteds);
        //     return;
        // }
        // setSelected([]);
    };
    
    const handleClick = (event, name) => {
        //alert(name)
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        // if (selectedIndex === -1) {
        //     newSelected = newSelected.concat(selected, name);
        // } else if (selectedIndex === 0) {
        //     newSelected = newSelected.concat(selected.slice(1));
        // } else if (selectedIndex === selected.length - 1) {
        //     newSelected = newSelected.concat(selected.slice(0, -1));
        // } else if (selectedIndex > 0) {
        //     newSelected = newSelected.concat(
        //     selected.slice(0, selectedIndex),
        //     selected.slice(selectedIndex + 1)
        //     );
        // }

        setSelected(newSelected);
        onRowClick(name);
    };

      const handleChangePage = (event, newPage) => {
          setPage(newPage + 1)
      };
    
      const handleChangeRowsPerPage = (event) => {
        const rowsPerPage = parseInt(event.target.value, 10);
        setPage(1)        ;
        setPerPage(rowsPerPage);
      };

    if(isLoading) {
        return <div>loading...</div>
    }
      
    if(isError) {
        return <div>oops...</div>
    }

    const {count, rows } = data;
    const isSelected = (name) => selected.indexOf(name) !== -1;      
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, count - page * rowsPerPage);
     
      return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={"medium" }
                        aria-label="enhanced table"
                    >
                        <DataGridHead
                            classes={classes}
                            config={config}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={totalEntries}
                            />
                        <TableBody>
                        {
                            rows.map((row, index) => {
                            
                                const isItemSelected = isSelected(row.username);

                                return (
                                    <TableRow
                                        key={`row-${index}`}
                                        hover
                                        onClick={(event) => handleClick(event, row[defaultKey ?? 'id'])}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}                                        
                                        selected={isItemSelected}
                                    >
                                        { config.map(
                                            ({ id, align, render }) => (
                                                <TableCell
                                                    key={id}
                                                    component="th"                                                
                                                    align={align ?? 'inherit'}
                                            >
                                                {render ? render(row[id]) : row[id]}
                                            </TableCell>
                                            ))}                                       
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: (83) * emptyRows }}>
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={count}
                    rowsPerPage={parseInt(perPage, 10)}
                    rowsPerPageOptions={[3, 5, 10]}
                    page={page-1}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
        </Paper>
    </div>
    )
    
  }

export default DataGrid;
import React from 'react';
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

function DataGridHead(props) {
    const {
      classes,      
      order,
      orderBy,
      config,
      onRequestSort
    } = props;

    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {config.map(({ id, numeric, disablePadding, label, overrideSoftField}) => (
            <TableCell
              key={overrideSoftField ?? id}
              align={numeric ? "right" : "left"}
              padding={disablePadding ? "none" : "default"}
              sortDirection={orderBy === overrideSoftField ?? id  ? order : false}
            >
              <TableSortLabel
                active={orderBy ===  overrideSoftField ?? id}
                direction={orderBy ===  (overrideSoftField ?? id) ? order : "asc"}
                onClick={createSortHandler(overrideSoftField ?? id)}
              >
                {label}
                {orderBy === (overrideSoftField ?? id) ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  DataGridHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number//.isRequired
  };

  export default DataGridHead;
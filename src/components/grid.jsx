import React, { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import './grid.css'

function Grid() {

  const [rowData, setRowData] = useState([]);

  const CompanyNameRenderer = ({ value }) => (
    <p className='text-ellipsis whitespace-nowrap'>
      {value}
    </p>
  );

  const MissionResultRenderer = ({ value }) => (
    <p className='text-ellipsis whitespace-nowrap'>
      {`${value}`}
    </p>
  );

  /* Format Date Cells */
  const dateFormatter = (params) => {
    return new Date(params.value).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Format Price
  const priceFormat = (price) => {
    return (price.value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  // Format Date
  const timeFormatter = (value) => {
    <p className='text-ellipsis whitespace-nowrap'>
      {`${value}UTC`}
    </p>
  }

  const numberToColor = (val) => {
    if (val === false) {
      return '#ffaaaa';
    } else {
      return '#aaffaa';
    }
  };

  const cellStyle = (params) => {
    const color = numberToColor(params.value);
    return {
      backgroundColor: color,
      color: "black"
    };
  };

  const [colDefs] = useState([
    {
      field: 'mission',
      width: 150,
      // checkboxSelection: true,
    },
    {
      field: 'company',
      width: 130,
      cellRenderer: CompanyNameRenderer,
    },
    {
      field: 'location',
      width: 225,
    },
    {
      field: 'date',
      valueFormatter: dateFormatter,
    },
    {
      field: 'time',
      width: 120,
      valueFormatter: timeFormatter,
    },
    {
      field: 'rocket',
      width: 120,
    },
    {
      field: 'price',
      width: 130,
      valueFormatter: priceFormat,
    },
    {
      field: 'successful',
      width: 120,
      cellRenderer: MissionResultRenderer,
      cellStyle: cellStyle,
    },
  ]);


  // Fetch data & update rowData state
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // Apply settings across all columns
  const defaultColDef = useMemo(() => ({
    filter: true,
    editable: true,
    resizable: true,
    sortable: true,
  }));


  // Container: Defines the grid's theme & dimensions.
  return (
    <div className="ag-theme-quartz-dark w-full h-full text-start">
      <AgGridReact style={{ width: '100%', height: '100%' }}
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        rowSelection="multiple"
        onSelectionChanged={(event) => console.log('Row Selected!')}
        onCellValueChanged={(event) =>
          console.log(`New Cell Value: ${event.value}`)
        }
      />
    </div>
  );
};


export default Grid;
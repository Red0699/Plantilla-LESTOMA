import React, { useEffect, useRef } from "react";
import DataTable from "./DataTable";


function TablesPage() {

  /*
  const tableRef = useRef(null);

    useEffect(() => {
      // Inicializa DataTables en el elemento de la tabla
      $(tableRef.current).DataTable();
    }, []);
    */

  return (

    
    <>
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>

      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <DataTable/>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>

  )
}

export default TablesPage
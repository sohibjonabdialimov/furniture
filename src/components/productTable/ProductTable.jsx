import "./productTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Product } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosT } from "../../services/api/axios";
const ProductTable = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT.get("/admin/getAllProducts").then((response) => {
      setData(response.data.allCategory);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {};

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/admin/products/new" className="link">
          Add New Product
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        getRowId={(row) => row.uuid}
        columns={Product?.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductTable;

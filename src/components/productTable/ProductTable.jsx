import "./productTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Product } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { ToastContainer, toast } from "react-toastify";
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

  const handleDelete = async (id) => {
    axiosT.delete(`/admin/deleteProductBy/${id}`).then((response) => {
      console.log(response);
      toast.info("Mahsulot o'chirildi", {
        position: "top-right",
      });
      fetchProducts();
    });
  };

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
              onClick={() => handleDelete(params.row.uuid)}
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
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
        // checkboxSelection
      />
    </div>
  );
};

export default ProductTable;

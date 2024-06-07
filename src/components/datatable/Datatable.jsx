import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosT } from "../../services/api/axios";

const Datatable = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT.get("/allAdmins").then((response) => {
      setData(response.data);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    axiosT.delete(`/adminDelete/${id}`).then((response) => {
      console.log(response);
      toast.info("Admin o'chirildi", {
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
      <div className="datatableTitle">
        Add New User
        <Link to="/admin/users/add" className="link">
          Add New Users
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        getRowId={(row) => row.uuid}
        columns={userColumns?.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Datatable;

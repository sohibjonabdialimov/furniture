import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Category } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosT } from "../../services/api/axios";

const CategoryTable = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT.get("/admin/getAllCategory").then((response) => {
      setData(response.data.allCategory);
      console.log(data);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
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
        Yangi kategoriya qo'shish
        <Link to="/admin/categories/new" className="link">
          Yangi kategoriya qo'shish
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        getRowId={(row) =>  row.uuid}
        columns={Category?.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default CategoryTable;

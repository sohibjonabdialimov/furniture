export const userColumns = [
  { field: "id", headerName: "ID", width: 270 },
  {
    field: "displayName",
    headerName: "Full Name",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "password",
    headerName: "Password",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
];
export const Product = [
  { field: "id", headerName: "ID", width: 220 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 230,
  },

  {
    field: "count",
    headerName: "Number of products",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    
  },
];
export const Category = [
  { field: "uuid", headerName: "ID", width: 500 },
  {
    field: "categoryName",
    headerName: "Kategoriya nomi",
    width: 400,
    renderCell: (params) => {
      console.log(params);
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.categoryImage} alt="avatar" />
          {params.row.categoryName}
        </div>
      );
    },
  },
];

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
  { field: "uuid", headerName: "ID", width: 220 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div key={params.row.uuid} className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "category_id",
    headerName: "Kategoriya ID",
    width: 230,
  },

  {
    field: "name",
    headerName: "Mahsulot nomi",
    width: 150,
  },
  {
    field: "current_price",
    headerName: "Hozirgi narxi",
    width: 150,
    
  },
  {
    field: "discount_price",
    headerName: "Chegirma narxi",
    width: 150,
  },
  {
    field: "height",
    headerName: "Balandligi",
    width: 150,
    
  },
  {
    field: "weight",
    headerName: "Eni",
    width: 150,
  },
  {
    field: "length",
    headerName: "Uzunligi",
    width: 150,
    
  },
  {
    field: "country",
    headerName: "Uzunligi",
    width: 150,
    
  }
];
export const Category = [
  { field: "uuid", headerName: "ID", width: 500 },
  {
    field: "categoryName",
    headerName: "Kategoriya nomi",
    width: 400,
    renderCell: (params) => {
      return (
        <div key={params.row.uuid} className="cellWithImg">
          <img className="cellImg" src={params.row.categoryImage} alt="avatar" />
          {params.row.categoryName}
        </div>
      );
    },
  },
];

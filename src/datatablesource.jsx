import { formatImage } from "./utils/formatImage";

export const userColumns = [
  { field: "uuid", headerName: "ID", width: 340 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 300,
  },
  {
    field: "email",
    headerName: "Email",
    width: 280,
  },
  {
    field: "phoneNumber",
    headerName: "Phone number",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
  },
];
export const Product = [
  { field: "uuid", headerName: "ID", width: 340 },
  {
    field: "name",
    headerName: "Mahsulot nomi",
    width: 230,
    renderCell: (params) => {
      return (
        <div key={params.row.uuid} className="cellWithImg">
          <img className="cellImg" src={formatImage(params.row.img)} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "category_id",
    headerName: "Kategoriya ID",
    width: 325,
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
    headerName: "Mamlakati",
    width: 150,
  },
];
export const Category = [
  { field: "uuid", headerName: "ID", width: 380 },
  {
    field: "categoryName",
    headerName: "Kategoriya nomi",
    width: 300,
    renderCell: (params) => {
      return (
        <div key={params.row.uuid} className="cellWithImg">
          <img
            className="cellImg"
            src={formatImage(params.row.categoryImage)}
            alt="avatar"
          />
          {params.row.categoryName}
        </div>
      );
    },
    
  },
  {
    field: "productCount",
    headerName: "Mahsulotlar soni",
    width: 150,
  },

];

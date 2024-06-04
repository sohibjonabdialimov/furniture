import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CategoryTable from "../../components/categorytable/CategoryTable"

const CategoryList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <CategoryTable/>
      </div>
    </div>
  )
}

export default CategoryList
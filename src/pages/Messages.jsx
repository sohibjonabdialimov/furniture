import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
const Messages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "comments"));
        querySnapshot.forEach((doc) => {
          console.log(doc);
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Foydalanuvchilarning fikrlari</div>
          <div className="wrap">
            {data.map((item, index) => {
              return (
                <div key={item.id} className="wrap_item">
                  <div className="index"><b>{index + 1}.</b></div>
                  <div className="info">
                    <h2><b>Ism:</b> {item.name}</h2>
                    <p><b>Email:</b> {item.email}</p>
                    <p><b>Xabar:</b> {item.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

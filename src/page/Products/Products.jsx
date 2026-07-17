import { FaPlus } from "react-icons/fa";
import "./products.css";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useState } from "react";

export default function Products() {
  const navigate = useNavigate();
  const [selectState, setSelectState] = useState(true);
  const goAddProduct = () => {
    navigate("/addproduct");
  };
  const rawData = localStorage.getItem("product");
  const productData = rawData ? JSON.parse(rawData) : [];
  const allCategories = ["Men", "Women", "T-Shirt", "Hoodie", "Dress"];
  const notSelect = (e) => {
    if(e == true){
      e.target.checked = false
    }else{
      e.target.checked = true
    }
  }
  const selectAll = () => {
    if (selectState == false) {
      setSelectState(true);
    } else {
      setSelectState(false);
    }
    console.log(selectState);
  };
  return (
    <section className="productsSec">
      <div className="productTitle">
        <h1>Products</h1>
        <div className="headerButtonAc">
          <button onClick={goAddProduct}>
            <FaPlus />
            Add Product
          </button>
        </div>
      </div>
      <div className="actionButtons">
        <button>
          <RiDeleteBin6Line />
        </button>
        <button>
          <RiEdit2Line />
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" onClick={selectAll}>
              <input type="checkbox" /> Product
            </th>
            <th scope="col">Remainder</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item) => (
            <tr>
              <td className="productDadData">
                <input
                  checked={selectState ? false : true}
                  type="checkbox"
                />
                <img className="productImg" src={item.imgUrl} alt="error" />
                <div className="productTitleTwo">
                  <b>{item.productName}</b>
                  <p>{item.categoryInf}</p>
                </div>
              </td>
              <td className="dataMain">
                <div className="salom">
                  <b style={{ letterSpacing: "-1px" }}>{item.productRem}</b>
                </div>
              </td>
              <td className="dataMain">{item.productColor}</td>
              <td className="dataMain">{item.priceProduct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

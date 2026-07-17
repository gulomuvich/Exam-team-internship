import { FaLongArrowAltLeft } from "react-icons/fa";
import "../../page/Products/addProduct.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [productColor, setProductColor] = useState("");
  const [categoryInf, setCategoryInf] = useState("");
  const [productRem, setProductRem] = useState("")
  const navigate = useNavigate("");
  const messageWindow = document.querySelector(".messageWindow");
  const productRemainder = (event) => {
    setProductRem(event.target.value)
  }
  const setColor = (event) => {
    setProductColor(event.target.value);
  };
  const nameinf = (event) => {
    setProductName(event.target.value);
    productName.trim();
  };
  const productPrice = (event) => {
    setPriceProduct(event.target.value);
  };
  const cateogoryInf = (event) => {
    setCategoryInf(event.target.value);
  };
  const exitBtn = () => {
    window.history.go(-1);
  };
  const imageUrl = (event) => {
    setImgUrl(event.target.value);
  };
  const sumbitData = () => {
    const reData = localStorage.getItem("product")
    const localData = reData ? JSON.parse(reData) : []
    const malumotlar = {
      productName,
      productRem,
      priceProduct,
      categoryInf,
      productColor,
      imgUrl,
    };

    localData.push(malumotlar)
    localStorage.setItem("product", JSON.stringify(localData))
    if (
      productName == "" &&
      categoryInf == "" &&
      imgUrl == "" &&
      productColor == ""
    ) {
      const notMessageWindow = document.querySelector(".notDataWindow");
      notMessageWindow.style.opacity = 1;
      setTimeout(() => {
        notMessageWindow.style.opacity = 0;
      }, 2000);
    } else {
      messageWindow.style.opacity = 1;
      setTimeout(() => {
        messageWindow.style.opacity = 0;
      }, 1500);
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    }
  };
  return (
    <section className="addproductsPart">
      <button onClick={exitBtn} className="exitButton">
        <FaLongArrowAltLeft />
        Back
      </button>
      <h1>Add Product</h1>
      <p className="messageWindow">Succes!</p>
      <p className="notDataWindow">inputs are still empty :(</p>
      <ul className="addList">
        <li>
          <form id="fromed" className="addForm">
            <h2>Information</h2>
            <label>
              Product Name
              <input
                required
                onChange={nameinf}
                value={productName}
                placeholder="Summer T-Shirt"
                type="text"
              />
            </label>
            <label>
              Product Description
              <textarea
                className="my-textarea"
                placeholder="Product description"
              />
            </label>
            <label>
              Images URL
              <input
                required
                onChange={imageUrl}
                className="imageUrlInput"
                type="text"
              />
            </label>
              <h4 className="proceTitle">Price</h4>
              <ul className="neddedInputs">
                <li>
            <label>
                  <div>
                    <h4>Product Price</h4>
                  <input
                    onChange={productPrice}
                    required
                    placeholder="Enter price"
                    type="text"
                  />
                  </div>
                    </label>
                  <div>
                    <label>
                    <h4>Product Remainder</h4>
                      <input
                    onChange={productRemainder}
                    required
                    placeholder="Enter Remainder"
                    type="text"
                  />
                    </label>
                  
                  </div>
                </li>
              </ul>
          </form>
        </li>
        <li className="categoriesVariant">
          <h2 style={{ marginBottom: "30px" }}>Categories</h2>
          <h4>
            <input
              value={"Women"}
              onChange={cateogoryInf}
              name="category"
              type="radio"
            />{" "}
            Women
          </h4>
          <h4>
            <input
              value={"Men"}
              onChange={cateogoryInf}
              name="category"
              type="radio"
            />{" "}
            Men
          </h4>
          <h4>
            <input
              value={"T-Shirt"}
              onChange={cateogoryInf}
              name="category"
              type="radio"
            />{" "}
            T-Shirt
          </h4>
          <h4>
            <input
              value={"Hoodie"}
              onChange={cateogoryInf}
              name="category"
              type="radio"
            />{" "}
            Hoodie
          </h4>
          <h4>
            <input
              value={"Dress"}
              onChange={cateogoryInf}
              name="category"
              type="radio"
            />{" "}
            Dress
          </h4>
          <h6 className="colorsCategory">Colors</h6>
          <h5>
            <input
              onChange={setColor}
              value={"White"}
              name="color"
              type="radio"
            />
            White
          </h5>
          <h5>
            <input
              onChange={setColor}
              value={"Black"}
              name="color"
              type="radio"
            />
            Black
          </h5>
          <h5>
            <input
              onChange={setColor}
              value={"Blue"}
              name="color"
              type="radio"
            />
            Blue
          </h5>
          <h5>
            <input
              onChange={setColor}
              value={"Yellow"}
              name="color"
              type="radio"
            />
            Yellow
          </h5>
        </li>
        <div className="actionAddButtons">
          <button onClick={exitBtn}>Cancel</button>
          <button onClick={sumbitData} type="sumbit" form="formed">
            Save
          </button>
        </div>
      </ul>
    </section>
  );
}

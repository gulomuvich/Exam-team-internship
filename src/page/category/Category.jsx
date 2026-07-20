import { useState } from "react";
import "./category.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";


function Category() {
  const [reData, setReData] = useState(
    JSON.parse(localStorage.getItem("category")) || [],
  );
  const [showModal, setShowModal] = useState(false);

  const [categories, setCategories] = useState([]);

  console.log(categories);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function addCategories() {
    const newCategory = {
      id: Date.now(),
      name,
      image,
      item: 0,
    };

    reData.push(newCategory);
    localStorage.setItem("category", JSON.stringify(reData));

    setCategories([...categories, newCategory]);

    setName("");
    setImage("");

    setShowModal(false);
  }

  return (
    <div className="categories">
      <div className="top">
        <h2>Categories</h2>

        <button className="addBtn" onClick={() => setShowModal(true)}>
          + Add Category
        </button>
      </div>
      <div className="actionButtons">
        <button>
          <RiDeleteBin6Line />
        </button>
        <button>
          <RiEdit2Line />
        </button>
      </div>

      <div className="cards">
        {reData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />

            <div className="cardBody">
              <h3>{item.name}</h3>
              <p>{item.items} items</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modalBox">
            <button className="close" onClick={() => setShowModal(false)}>
              ×
            </button>

            <h2>Add Category</h2>

            <label>Category Name</label>
            <input
              type="text"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Category Image URL</label>
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <div className="buttons">
              <button className="cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button className="create" onClick={addCategories}>
                Create Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://cfc0fe54-1d30-41cc-b99a-3d999a632fc3.mock.pstmn.io/product/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.group(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;

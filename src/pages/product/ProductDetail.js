import { useParams } from "react-router-dom";

const products = [
  {
    code: 'sam-sung-s20',
    name: 'Samsung S20',
    ram: 10,
  },
  {
    code: 'iphone14',
    name: 'Iphone 14',
    ram: 12,
  }
]

export default function ProductDetail() {
  let { productCode } = useParams();

  const product = products.find(item => item.code === productCode);

  if (!product) {
    return "Sản phẩm không tồn tại";
  }

  return (
    <div>
      <h4>Tên sản phẩm: {product.name}</h4>
      <p>Ram: {product.ram}GB</p>
    </div>
  )
}
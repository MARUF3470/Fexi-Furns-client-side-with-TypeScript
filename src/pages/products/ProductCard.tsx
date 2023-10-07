/* eslint-disable @typescript-eslint/no-explicit-any */
type ImageType = {
  _id: string;
  path: string;
  filename: string;
};

const ProductCard = ({ product }: any) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <div>
        {product?.images?.map((image: ImageType) => (
          <img
            key={image._id}
            src={`http://localhost:5000/uploads/${image.filename}`}
            alt={image.filename}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

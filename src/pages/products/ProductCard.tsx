/* eslint-disable @typescript-eslint/no-explicit-any */
// type ImageType = {
//   _id: string;
//   path: string;
//   filename: string;
// };

const ProductCard = ({ product }: any) => {
  return (
    <div>
      {/* <h1>{product.name}</h1>
      <div>
        {product?.images?.map((image: ImageType) => (
          <img
            key={image._id}
            src={`http://localhost:5000/uploads/${image.filename}`}
            alt={image.filename}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        ))}
      </div> */}
      <div className="card card-compact h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={`http://localhost:5000/uploads/${product.images[0].filename}`}
            alt="Shoes"
            className="h-52 w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-base text-zinc-950">{product?.name}</h2>
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

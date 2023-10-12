/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsFillTrash2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { usePostProductMutation } from "../../features/api/products/productApi";
import Loading from "../../component/reuseable/Loading/Loading";
import toast from "react-hot-toast";
type MyValues = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  type: string;
  pictures: object[][];
};
const AddProduct = () => {
  const [postProduct, { isError, isLoading, isSuccess }] =
    usePostProductMutation();
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<MyValues>({
    defaultValues: {},
  });
  const {
    fields: skillFields,
    append: pictureAppend,
    remove: pictureRemove,
  } = useFieldArray({ control, name: "pictures" });

  const handleProductUpload = async ({
    name,
    description,
    price,
    quantity,
    pictures,
    category,
    type,
  }: MyValues) => {
    const formData: any = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category", category);
    formData.append("type", type);
    for (let i = 0; i < pictures.length; i++) {
      console.log(pictures[i][0]);
      formData.append(`images`, pictures[i][0]);
    }
    postProduct(formData);
    reset();
    toast.success("Product Added");
    if (isLoading) {
      return <Loading />;
    }
    if (isSuccess) {
      return;
    }
    if (isError) {
      return "Having some issues to post the product. Please check your submision or try again later";
    }
  };

  return (
    <div>
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">CONTACT US</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          /{" "}
          <Link
            to="/adminpage"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            ADMIN PAGE{" "}
          </Link>
          / ADD PRODUCT
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(handleProductUpload)}
          className="mx-auto my-10 p-8 border"
        >
          <label htmlFor="name" className="text-xs">
            Product Name * <br />
            <input
              type="text"
              {...register("name", {
                required: "Please Provide Funiture Name",
              })}
              placeholder="Enter Product Name"
              className="input text-xs input-bordered w-3/4 lg:w-1/2 block py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>
          <label htmlFor="Description" className="text-xs">
            Description * <br />
            <textarea
              {...register("description", {
                required: "Provide Furniture Description",
              })}
              placeholder="Enter Product Details"
              className="input text-xs input-bordered w-full h-48 py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </label>
          <label className="label">
            <span className="label-text text-xs">Category *</span>
          </label>
          <select
            className="select select-bordered text-xs rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            {...register("category", { required: "Select One" })}
          >
            <option value="">Select One</option>
            <option value="new arrival">New Arrival</option>
            <option value="featured">Featured</option>
            <option value="tending">Tending</option>
            <option value="on sell">On Sell</option>
          </select>
          {errors.category && (
            <p className="text-xs text-red-500">{errors.category.message}</p>
          )}
          <label className="label">
            <span className="label-text text-xs">Type *</span>
          </label>
          <select
            className="select select-bordered text-xs rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            {...register("type", { required: "Select One" })}
          >
            <option value="">Select One</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Living">Living</option>
            <option value="Dinning">Dinning</option>
            <option value="Lounge">Lounge</option>
            <option value="Office Chair">Office Chair</option>
          </select>
          {errors.type && (
            <p className="text-xs text-red-500">{errors.type.message}</p>
          )}
          <label htmlFor="price" className="text-xs mt-2 block">
            Price *<br />
            <input
              type="number"
              {...register("price", { required: "Provide Furniture Price " })}
              placeholder="Enter Product Price"
              className="block input text-xs input-bordered py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </label>
          <label htmlFor="quantity" className="text-xs">
            Quantity *<br />
            <input
              type="number"
              {...register("quantity", { required: "Provide Stock Quantity" })}
              placeholder="Enter Product Quantity"
              className="input text-xs input-bordered py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.quantity && (
              <p className="text-red-500">{errors.quantity.message}</p>
            )}
          </label>
          <div>
            <div>
              {skillFields.map((item, index) => {
                return (
                  <div key={item.id} className="flex items-center gap-2">
                    <input
                      className="mt-3 text-xs"
                      type="file"
                      {...register(`pictures[${index}]`, {
                        required: "Upload Furniture Pictures",
                      })}
                    />
                    {errors.pictures && (
                      <p className="text-red-500">{errors.pictures.message}</p>
                    )}
                    <button
                      type="submit"
                      onClick={() => pictureRemove(index)}
                      className="rounded-full mt-4 bg-red-500/20 border border-red-500 group transition-all hover:bg-red-500"
                    >
                      <BsFillTrash2Fill
                        className="text-red-500 group-hover:text-white transition-all"
                        size="20"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type="button"
                onClick={() => pictureAppend("")}
                className="btn btn-xs rounded-sm mt-5"
              >
                Add picture *
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="SUBMIT"
              className="btn rounded-sm mt-4 bg-violet-700 text-white text-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

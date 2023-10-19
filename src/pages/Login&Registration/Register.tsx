/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { usePostUserMutation } from "../../features/api/users/usersApi";
import Loading from "../../component/reuseable/Loading/Loading";
import Error from "../../component/reuseable/Error/Error";
type MyValues = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
  img: string;
};

const Register = () => {
  const [postUser, { isError, isLoading, isSuccess }] = usePostUserMutation();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState(false);
  const { registration, updateUser }: any = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<MyValues>({
    defaultValues: {},
  });
  const handleRegistration = ({
    name,
    email,
    password,
    cpassword,
    img,
  }: MyValues) => {
    if (password !== cpassword) {
      return setError(true);
    }
    setError(false);
    const image = img[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGKEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          registration(email, password).then((res: any) => {
            console.log(res.user);
            toast.success("User registration done");
            const profile = {
              displayName: name,
              photoURL: imgData.data.url,
            };
            updateUserInfo(profile);
            reset();
            const user = {
              name,
              userImage: imgData.data.url,
              email,
              role: "customer",
            };
            postUser(user);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        reset();
        setError(err.message);
      });
  };
  const updateUserInfo = (profile: {
    displayName: string;
    photoURL: string;
  }) => {
    updateUser(profile)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err: any) => console.log(err));
  };
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  if (isSuccess) {
    return;
  }
  return (
    <div>
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">REGISTRATION</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          / REGISTER
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="lg:w-1/3 mx-auto my-20 p-8 border"
        >
          <label htmlFor="name" className="text-xs">
            Name <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: "Please provide your name" })}
              className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>
          <label htmlFor="email" className="text-xs">
            Email <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "Please provide your email" })}
              className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </label>
          <label htmlFor="password" className="text-xs">
            Password <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Please provide your password",
              })}
              className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </label>
          <label htmlFor="confirmpassword" className="text-xs">
            Confirm Password <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("cpassword", {
                required: "Please retype your password",
              })}
              className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.cpassword && (
              <p className="text-red-500">{errors.cpassword.message}</p>
            )}
          </label>
          <label htmlFor="image" className="text-xs">
            Provide Your Picture <br />
            <input
              type="file"
              {...register("img", {
                required: "Please provide your profile picture",
              })}
              className="input text-xs w-full px-4 rounded-sm focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </label>
          <input
            type="submit"
            value="REGISTRATION"
            className="btn rounded-sm mt-4 bg-violet-700 text-white text-sm w-full "
          />
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Link
              to={"/login"}
              className="btn text-xs w-full rounded-sm bg-slate-950 text-white"
            >
              ALLREADY HAVE AN ACCOUNT?
            </Link>
            <button className="btn text-xs w-full rounded-sm bg-slate-950 text-white hover:text-red-400">
              <FcGoogle className="text-xl" /> GOOGLE LOGIN
            </button>
            {error && <p className="text-red-500">Recheck Your Password</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

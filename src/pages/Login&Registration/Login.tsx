/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import toast from "react-hot-toast";
type MyValues = {
  email: string;
  password: string;
};
const Login = () => {
  const { login }: any = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<MyValues>({
    defaultValues: {},
  });
  const handleLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    login(email, password)
      .then((res: any) => {
        const user = res.user;
        reset();
        if (user) {
          toast.success("Login Successfully");
          navigate(from, { replace: true });
        }
      })
      .catch((err: any) => console.log(err));
  };
  return (
    <div>
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">SIGN-IN</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          / SIGN-IN
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="lg:w-1/3 mx-auto my-20 p-8 border"
        >
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
          <input
            type="submit"
            value="SIGNIN"
            className="btn rounded-sm mt-4 bg-violet-700 text-white text-sm w-full "
          />
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Link
              to={"/register"}
              className="btn text-xs w-full rounded-sm bg-slate-950 text-white"
            >
              CREATE NEW ACCOUNT
            </Link>
            <button className="btn text-xs w-full rounded-sm bg-slate-950 text-white hover:text-red-400">
              FORGET PASSWORD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

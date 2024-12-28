import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { login } from "../../services/apiUser";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']})
      queryClient.invalidateQueries({queryKey: ['cart']})
      toast.success("login successful");
      navigate("/");
    },
    onError: (err) =>{
      toast.error(err.message);
      reset()
    },
  });

  const onSubmit = ({ email, password }) => {
    mutate({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[500px] p-5 shadow-md flex flex-col gap-5 rounded-md"
    >
      <div className="flex flex-col w-full gap-1">
        <label htmlFor="email" className="text-[12px] font-semibold">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          name="email"
          {...register("email", { required: "Please pass in your email" })}
          className="w-full border border-[#c9c9c9] px-4 py-2 rounded"
        />
        {errors?.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col w-full gap-1">
        <label htmlFor="password" className="text-[12px] font-semibold">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", {
            required: "Please pass in yr password",
            minLength: {
              value: 6,
              message: "Password needs to be a minimum of 6 characters",
            },
          })}
          id="password"
          name="password"
          className="w-full border border-[#c9c9c9] px-4 py-2 rounded"
        />
        {errors?.password && <p className="error">{errors.password.message}</p>}
      </div>

      <button
        disabled={isPending}
        className="w-full px-5 py-2 font-semibold text-white bg-black rounded"
      >
        Login
      </button>
      
      <p>Dont have an account? <Link to='/signup'>Signup</Link></p>
    </form>
  );
};

export default LoginForm;

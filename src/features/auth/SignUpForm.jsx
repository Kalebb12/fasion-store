import { useForm } from "react-hook-form";
import { signup } from "../../services/apiUser";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: () => toast.success("confirmation code sent to email"),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[500px] p-5 shadow-md flex flex-col gap-5 rounded-md"
    >
      <div className="flex flex-col w-full gap-1">
        <label htmlFor="fullName" className="text-[12px] font-semibold">
          FullName
        </label>

        <input
          type="text"
          placeholder="Enter Fullname"
          id="fullname"
          name="fullName"
          {...register("fullName", {
            required: "Please pass in your FullName",
          })}
          className="w-full border border-[#c9c9c9] px-4 py-2 rounded"
        />
        {errors?.fullName && <p className="error">{errors.fullName.message}</p>}
      </div>

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
          placeholder="Enter password"
          id="password"
          name="password"
          {...register("password", {
            required: "Please pass in yr password",
            minLength: {
              value: 6,
              message: "Password needs to be a minimum of 6 characters",
            },
          })}
          className="w-full border border-[#c9c9c9] px-4 py-2 rounded"
        />
        {errors?.password && <p className="error">{errors.password.message}</p>}
      </div>

      <button
        disabled={isPending}
        className="w-full px-5 py-2 font-semibold text-white bg-black rounded"
      >
        signup
      </button>

      <p>
        Already have an account? <Link to="/signup">Login</Link>
      </p>
    </form>
  );
};

export default SignUpForm;

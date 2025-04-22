import React from "react";
import AuthForm from "../components/AuthForm";
import { useSignupMutation } from "../lib/services/authSlice";
import { setCredentials } from "../lib/features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    try {
      const response = await signup(data).unwrap();
      dispatch(setCredentials(response));
      toast.success("Signed up successfully!");
      navigate("/");
    } catch (error) {
      toast.error(
        error?.data?.message || "An error occurred. Please try again."
      );
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md">
            <AuthForm
              type="signup"
              onSubmit={handleSignUp}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;

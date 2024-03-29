import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInSuccess,
  signInStart,
} from "../redux/user/userSlice";
import Oauth from "../components/Oauth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please Fill All "));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="p-4 flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-4">
        {/*left tab */}
        <div className="flex-1">
          <Link to="/" className=" text-4xl font-bold dark:text-white">
            <span className="px-1 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
              SARGARS
            </span>
            BLOG
          </Link>
          <p className="text-gray font-semibold mt-5">
            This is aDemo Project, you can SignUp Gmail and Password
          </p>
        </div>
        {/* right tab*/}
        <div className="sm:mt-5 md:ml-10 flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="UserEmail"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="YourPassword"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              gradientDuoTone={"purpleToPink"}
              disabled={loading}
            >
              {loading ? (
                <Fragment>
                  <Spinner size="sm" /> <span>Loading ...</span>
                </Fragment>
              ) : (
                "Sign In"
              )}
            </Button>

            <Oauth />
          </form>
          <div className="flex gap-3 mt-5 text-sm ">
            <span>Do not Have Accout ? </span>
            <Link to="/sign-up" className="text-blue-400">
              SignUP
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

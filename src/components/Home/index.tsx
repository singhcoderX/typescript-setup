import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./store/HomeSlice";
import { useNavigate } from "react-router-dom";

type Props = {};

function Home({}: Props) {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(USER_LOGGED_IN({ user: "Test" }));

    return () => {
      dispatch(USER_LOGGED_OUT());
    };
  }, []);

  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Home;

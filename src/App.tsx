type Props = {};

import { useNavigate } from "react-router-dom";

const App = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <br />
      Hello World
      <br />
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Click Here to GO to HOME page
      </button>
    </div>
  );
};

export default App;

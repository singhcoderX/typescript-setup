type Props = {};

import reactImage from "./assets/react.png";

const App = (props: Props) => {
  return (
    <div className="container">
      <img src={reactImage} alt="React Logo" height={200} width={300} />
      Hello TypesScript Webpack Starter Template
    </div>
  );
};

export default App;

import { useSelector } from "react-redux";
import { Questions, Results, Home } from "./pages";
import {Layout} from "./components";

function App() {
  const currentStep = useSelector((state) => state.step.value);
  const componentToRender = (currentStep) => {
    if (currentStep === 0) {
      return <Home />;
    } else if (currentStep === 1) {
      return <Questions />;
    } else {
      return <Results />;
    }
  };
  return <Layout>{componentToRender(currentStep)}</Layout>;
}

export default App;

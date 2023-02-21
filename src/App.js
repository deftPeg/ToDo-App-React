import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* entry point for the app. Will call Todo component to display the form */}
      <Todo />
    </div>
  );
}

export default App;

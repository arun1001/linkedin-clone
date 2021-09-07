import "./App.scss";
import { Feed } from "./Feed";
import Header from "./Header";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="body">
        <Sidebar />
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;

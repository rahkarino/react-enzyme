import Header from "./components/header";
import "./app.scss";
import HeadLine from "./components/headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine header="Posts" desc="click the button to render posts" />
      </section>
    </div>
  );
}

export default App;

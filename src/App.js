import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { TodoContextProvider } from "./Contexts/TodoContext";
function App() {
  return (
    <TodoContextProvider>
      <section className="todoapp">
      <Header />
      <Content />
      <Footer />
    </section>
    </TodoContextProvider>
  );
}

export default App;

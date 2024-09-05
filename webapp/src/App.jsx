// components
import FilterApp from "./components/FilterApp";
import Layout from "./components/Layout";
import TableApp from "./components/TableApp";
import Title from "./components/Title";

function App() {
  return (
    <Layout>
      <Title />
      <FilterApp />
      <TableApp />
    </Layout>
  );
}

export default App;

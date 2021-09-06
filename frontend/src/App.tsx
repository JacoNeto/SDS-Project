import DataTable from "components/data_table";
import Footer from "components/footer";
import NavBar from "components/nav_bar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

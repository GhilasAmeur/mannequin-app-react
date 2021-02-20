//import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Acceuil from "./components/accueil/Accueil";
import Description from "./components/mannequin/Description";
import Erreur from "./components/erreur/Erreur";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/accueil/Navbar";
import Footer from "./components/accueil/Footer";

function App() {
  const [data, setData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const inputSearch = (search) => {
    axios
      .get(
        "https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=" +
          search
      )
      .then((res) => {
        //console.log(res.data.people.length);
        if (res.data.people && res.data.people.length !== 0) {
          setData(res.data.people);
        } else {
          // console.log("pas de mannequin !");
          // setIsTrue(true);
        }
      });
  };

  const firstSearch = () => {
    axios
      .get(
        "https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=ce"
      )
      .then((res) => {
        // console.log(res.data);
        setData(res.data.people);
      });
  };

  useEffect(() => {
    firstSearch();
  }, []);

  return (
    <div className="">
      <Navbar inputSearch={inputSearch} />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Acceuil {...props} data={data} />}
          />
          <Route exact path="/description/:id" component={Description} />
          <Route exact path="/:erreur" component={Erreur} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

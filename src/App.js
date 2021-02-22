//AMEUR GHILAS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Acceuil from "./components/accueil/Accueil";
import Description from "./components/mannequin/Description";
import Erreur from "./components/erreur/Erreur";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/accueil/Navbar";
import Footer from "./components/accueil/Footer";

function App() {
  //les data je les recupere là mais j'utilise dans composant Mannequins et Accueil
  //data envoyer via props + explication lors de l'entretien
  const [data, setData] = useState([]);
  //fonction nous permettent de chercher un: model/mannequin
  const inputSearch = (search) => {
    axios
      .get(
        "https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=" +
          search
      )
      .then((res) => {
        if (res.data.people && res.data.people.length !== 0) {
          setData(res.data.people);
        } else {
          //gérer les erreurs par la suite
          console.log("Il existe aucun mannequin  !");
        }
      });
  };
  //fonction qui nous retourn les mannequins par default (search=ce)
  const firstSearch = () => {
    axios
      .get(
        "https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=ce"
      )
      .then((res) => {
        setData(res.data.people);
      });
  };

  useEffect(() => {
    firstSearch();
  }, []);

  return (
    <div className="" style={{ backgroundColor: "#000" }}>
      <Navbar inputSearch={inputSearch} />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Acceuil {...props} data={data} />}
          />
          <Route
            exact
            path="/description/:id"
            render={(props) => <Description {...props} data={data} />}
          />
          <Route exact path="/:erreur" component={Erreur} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

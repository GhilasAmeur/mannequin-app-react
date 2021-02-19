//import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Acceuil from "./components/accueil/Accueil";
import Description from "./components/mannequin/Description";
import Erreur from "./components/erreur/Erreur";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const firstSearch = () => {
    axios
      .get(
        "https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=ce"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.people);
      });
  };

  useEffect(() => {
    firstSearch();
  }, []);

  return (
    <div className="">
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
    </div>
  );
}

export default App;

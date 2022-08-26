import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import "./App.css";
import CreateWord from "./components/CreateWord";
import Day from "./components/Day";
import DayList from "./components/DayList";
import EmptyPage from "./components/EmptyPage";
import Header from "./components/Header";
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <DayList />
        </Route>
        <Route path="/day/:day">
          <Day />
        </Route>
        <Route path="/create_word">
          <CreateWord />
        </Route>
        <Route path="/create_day">
          <CreateDay />
        </Route>
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

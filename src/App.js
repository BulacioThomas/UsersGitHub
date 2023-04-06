import { useState } from "react";
import "./App.css";
import axios from "axios";

import { TextField, Button } from "@mui/material";

// COMPONENTS
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const userInput = value.toLowerCase().replace(/ /g, "");
    if (userInput) {
      axios(`https://api.github.com/users/${userInput}`).then((res) =>
        setData(res.data)
      );
    }
    setIsLoading(false);
    setValue("");
  };

  return (
    <div className="App">
      <Header />

      <form className="Form" onSubmit={onSubmit}>
        <TextField
          placeholder="
          search user"
          className="Textfield"
          variant="outlined"
          onChange={onChange}
          value={value}
        />
        <Button
          variant="contained"
          className="btn"
          sx={{ ml: 2 }}
          type="submit"
        >
          Buscar
        </Button>
      </form>

      {isLoading ? <Spinner /> : data.id ? <CardUser data={data} /> : null}
    </div>
  );
};

export default App;

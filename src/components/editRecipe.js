import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditRecipe() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const [editRecipe, setEditRecipe] = React.useState({
    editRecipeName: location.state.recipeName,
    editIngredents: location.state.ingredents,
    editDescription: location.state.description,
  });

  const handleEditRecipe = (e) => {
    setEditRecipe({ ...editRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .put(`http://localhost:8070/recipe/update/${location.state._id}`, {
        recipeName: editRecipe.editRecipeName,
        ingredents: editRecipe.editIngredents,
        description: editRecipe.editDescription,
      })
      .then(() => {
        alert("Recipe successfully edited");
      })
      .catch((err) => {
        alert(err);
      });
    navigate("/");
  };

  return (
    <Box
      component="form"
      className="addRecipe"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
        display: "inline-grid",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Edit Recipe Name"
        variant="standard"
        name="editRecipeName"
        value={editRecipe.editRecipeName}
        onChange={handleEditRecipe}
      />
      <TextField
        id="standard-basic"
        label="Edit Ingredents"
        variant="standard"
        name="editIngredents"
        value={editRecipe.editIngredents}
        onChange={handleEditRecipe}
      />
      <TextField
        id="standard-multiline-static"
        label="Edit Description"
        multiline
        rows={4}
        variant="standard"
        name="editDescription"
        value={editRecipe.editDescription}
        onChange={handleEditRecipe}
      />
      <Button variant="contained" disableElevation onClick={handleSubmit}>
        update
      </Button>
    </Box>
  );
}

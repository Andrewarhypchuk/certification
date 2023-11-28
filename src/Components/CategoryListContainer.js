import { useDispatch, useSelector } from "react-redux";
import {
  changeCategory,
  selectCategoriesList,
  selectSelectedCategory,
} from "../Redux/quiz-slice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CategoryListContainer = () => {
  const caregoriesList = useSelector(selectCategoriesList);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCategory(event.target.value));
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="categorySelect"
        value={selectedCategory}
        onChange={handleChange}
        label="Category"
      >
        {caregoriesList.map((name) => (
          <MenuItem key={name.id} value={name}>
            {name.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CategoryListContainer;

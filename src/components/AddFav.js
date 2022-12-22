import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const AddFav = () => {
  return (
    <div>
      <Typography variant="span" className="fav">
        Add to Favourites
      </Typography>
      <Checkbox
        icon={<FavoriteBorderIcon sx={{ color: "white" }} />}
        checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
      />
    </div>
  );
};

export default AddFav;

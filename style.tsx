import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem",
    
  },
  content: {
    margin: "1.5rem 1.5rem 1.5rem 2.5rem",
  },
  space:{
    height: "1.5rem"
  }

}));

export default useStyles;

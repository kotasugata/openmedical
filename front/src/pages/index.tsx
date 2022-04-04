import { TextField, Typography, Input, IconButton, Box } from "@mui/material";
import type { NextPage } from "next";
import { Header } from "../components/organisms/Headers";
import SearchIcon from "@mui/icons-material/Search";
import { textAlign } from "@mui/material/node_modules/@mui/system";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box sx={{ my: 10, textAlign: "center" }}>
        <Typography>年収・社員クチコミ1200万件</Typography>
        <Box display="flex" justifyContent="center">
          <TextField type="input" />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Home;

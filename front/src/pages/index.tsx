import {
  TextField,
  Typography,
  Input,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import type { NextPage } from "next";
import React from "react";
import { Header } from "../components/organisms/Headers";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

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
        <Box sx={{ my: 3 }}>
          <Link href="/companies">
            <Button
              variant="outlined"
              sx={{ borderRadius: "20px", px: 10 }}
              size="large"
            >
              openmedicalで求人検索
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;

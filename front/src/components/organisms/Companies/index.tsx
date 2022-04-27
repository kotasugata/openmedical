import { Box } from "@mui/material";
import React, { useEffect, useState, VFC } from "react";
import { useQuery } from "react-query";
import { getcompanies, Companies } from "src/pages/api/companies";

export const Test = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:3000/api/companies").then((res) => res.json())
  );
  console.log(data);
  if (isLoading) return <div>"Loading..."</div>;

  // if (error) return "An error has occurred: " + error.message;
  return (
    <>
      HOGE
      {data.companies.map((company) => (
        <Box>{company.name}</Box>
      ))}
    </>
  );
};

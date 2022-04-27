import { Box } from "@mui/material";
import { NextPage, GetStaticProps, GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {
  status: number;
  companies: {
    id: number;
    name: string;
    website: string;
    address: number;
  }[];
};

const Companies: NextPage<Props> = (props) => {
  const { companies } = props;
  console.log(companies, "companies");
  return (
    <>
      <NextSeo title="企業一覧" />
      test
      <ul>
        <Box>{companies}</Box>
      </ul>
    </>
  );
};

export const getSeverSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/companies");
  const companies = await res.json();
  if (!companies) {
    return {
      notFound: true,
    };
  }
  return {
    props: { companies }, // will be passed to the page component as props
  };
};

export default Companies;

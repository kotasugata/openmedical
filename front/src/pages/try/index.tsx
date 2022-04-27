import { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { Box } from "@mui/material";
import { Test } from "@/components/organisms/Companies";

type Props = {
  pokemon: any;
};

const Try: NextPage<Props> = (props) => {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <>
      <NextSeo title="企業一覧" />
      test
      <img src={pokemon.sprites.front_default} />
      <Test />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const pokemon = await res.json();
  console.log(pokemon);
  if (!pokemon) {
    return {
      notFound: true,
    };
  }
  return {
    props: { pokemon }, // will be passed to the page component as props
  };
};

export default Try;

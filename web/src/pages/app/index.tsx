import {
  getAccessToken,
  useUser,
  withPageAuthRequired,
} from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import React from "react";

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <div>Bem vindo,</div> <pre>{JSON.stringify(user)}</pre>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    console.log(getAccessToken(req, res));

    return {
      props: {},
    };
  },
});
// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const session = getSession(req, res);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/api/aith/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

import { getSession } from "next-auth/react";

export default function BLog({ props }) {
  return <h1>Hello</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

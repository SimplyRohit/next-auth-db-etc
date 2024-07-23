import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";
export default function Document() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securepage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securepage();
  }, []);

  if (loading) return <h1>Loading</h1>;
  return <h1>Hello</h1>;
}

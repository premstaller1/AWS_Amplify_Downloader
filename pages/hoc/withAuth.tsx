import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { user } = useAuthenticator();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/login"); // Redirect unauthenticated users
      }
    }, [user]);

    if (!user) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

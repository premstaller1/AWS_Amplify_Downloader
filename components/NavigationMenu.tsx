import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";

const NavigationMenu = () => {
  const { user, signOut } = useAuthenticator();

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <div>
        <Link href="/">Home</Link> | <Link href="/tool1">Tool 1</Link> |{" "}
        <Link href="/tool2">Tool 2</Link>
      </div>
      <div style={{ float: "right" }}>
        {user ? (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={signOut} style={{ marginLeft: "1rem" }}>
              Sign Out
            </button>
          </>
        ) : (
          <Link href="/login">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;

import Link from "next/link";
import { useSession } from "next-auth/client";

import Logo from "./Logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  const [session, loading] = useSession();

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          {session && (
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

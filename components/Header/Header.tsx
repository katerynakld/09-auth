import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Button from "../Button/Button";
import css from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        NoteHub
      </Link>

      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Button href="/" variant="primary" size="large">
              Home
            </Button>
          </li>{" "}
          <li className={css.navigationItem}>
            <Button href="/notes/filter/all" size="large" variant="primary">
              Notes
            </Button>
          </li>
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
}

export default Header;

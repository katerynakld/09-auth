import { Metadata } from "next";
import css from "./NotFound.module.css";

import Link from "next/link";
import Button from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "404 – Page Not Found | NoteHub",
  description:
    "Oops! The page you’re looking for doesn’t exist in NoteHub. Go back and continue organizing your notes.",
  openGraph: {
    title: "404 — Page Not Found | NoteHub",
    description:
      "Oops! This page doesn’t exist. Head back to NoteHub and continue writing.",
    url: "/404",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <div className={css.buttonBox}>
        <Button href="/" size="large" className={css.goBackBtn}>
          Go back home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

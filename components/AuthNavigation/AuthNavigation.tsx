"use client";

import css from "./AuthNavigation.module.css";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/api/clientApi";
import Button from "../Button/Button";
import Image from "next/image";

export default function AuthNavigation() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      clearIsAuthenticated();
      router.push("/sign-in");
    }
  };

  return isAuthenticated ? (
    <>
      <li className={css.navigationItem}>
        <Button href="/profile" variant="primary" size="large">
          Profile
        </Button>
      </li>

      <li className={css.logoutItem}>
        <Button onClick={handleLogout} variant="cancel" size="large">
          Logout
        </Button>
      </li>
      <li className={css.welcomeItem}>
        <p className={css.userWelcome}>
          Welcome, <br />
          {user?.username}
        </p>
        <Image
          src={"/UserAvatar.webp"}
          alt="User Avatar"
          width={40}
          height={40}
          loading="eager"
          className={css.avatar}
        />
      </li>
    </>
  ) : (
    <>
      <li className={css.navigationItem}>
        <Button href="/sign-in" variant="primary" size="large">
          Login
        </Button>
      </li>

      <li className={css.navigationItem}>
        <Button href="/sign-up" variant="primary" size="large">
          Sign up
        </Button>
      </li>
    </>
  );
}

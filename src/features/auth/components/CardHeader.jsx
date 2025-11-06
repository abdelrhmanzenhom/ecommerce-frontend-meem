import React from "react";
import styles from "./CardHeader.module.css";
import { Link } from "react-router-dom";

export default function CardHeader() {
  return (
    <Link to="/" className={styles.card_header + " flex items-center"}>
      <img src="/logo.png" className="w-20" alt="" />
      <span className="ml-2 font-logo text-black dark:text-primary font-bold tracking-wide">
        meem
      </span>
    </Link>
  );
}

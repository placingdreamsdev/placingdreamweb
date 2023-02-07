import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./Navbar.module.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles.gpt3__navbar_links}>
        <div className={styles.gpt3__navbar_links_container}>
          <a id={styles.logo} href="#header">
            <Image src="/pd_logo.png" alt="image" width="99" height="33" />
          </a>
          <p>
            <a href="#header">Home</a>
          </p>

          <p>
            <a href="#possibility">About Us</a>
          </p>
          <Link href="/Course">
            <p>Courses</p>
          </Link>
          <p>
            <a href="#blog">Testimonials</a>
          </p>
        </div>
      </div>
      <div className={styles.gpt3__navbar_sign}>
        <p>
          <WhatsAppIcon
            className={styles.WhatsAppIcon}
            onClick={() => window.open("https://wa.me/919987851716")}
            style={{
              fontSize: 50,
              alignContent: "center",
              display: "flex",
              marginRight: 15,
            }}
          />
        </p>
        <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdDXfBr5bJG8xEFa0O4VkkyKUM7yLuCw1iU7T-aHvV1_kV7RA/formResponse">
          <button type="button">Enroll</button>
        </a>
      </div>
      <div className={styles.gpt3__navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={[
              styles.gpt3__navbar_menu_container,
              styles.scale_up_center,
            ].join(" ")}
          >
            <div className={styles.gpt3__navbar_menu_container_links}>
              <p>
                <a href="#header">Home</a>
              </p>
              <p>
                <a href="#possibility">About Us</a>
              </p>
              <Link href="/Course">
                <p>Courses</p>
              </Link>
              <p>
                <a href="#blog">Testimonials</a>
              </p>
            </div>
            <div className={styles.gpt3__navbar_menu_container_links_sign}>
              <p>
                <Link href="/Contact">Contact Us</Link>
              </p>

              <Link href="/enroll">
                <button type="button">Enroll</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;

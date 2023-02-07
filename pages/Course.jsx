import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import styles from "../styles/Course.module.css";

function Course() {
  return (
    <div className={styles.page}>
      <Link href="\">
        <ArrowBackIcon
          style={{ marginTop: "2vh", marginLeft: "2vh", color: "white" }}
        />
      </Link>
      <div className={styles.main}>
        <Link href="\Acting">
          <div className={styles.courses}>Acting</div>
        </Link>
        <Link href="\Writing">
          <div className={styles.courses}>Script Writing</div>
        </Link>
        <Link href="\Editing">
          <div className={styles.courses}>Video Editing</div>
        </Link>
        <Link href="\Direction">
          <div className={styles.courses}>Direction</div>
        </Link>
        <Link href="\FilmMaking">
          <div className={styles.courses}>Film Making</div>
        </Link>
      </div>
    </div>
  );
}

export default Course;

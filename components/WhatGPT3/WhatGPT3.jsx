import Link from 'next/link';
import styles from './WhatGPT3.module.css'
import Image from 'next/image';

function WhatGPT3() {
  return (
    <div id={styles.gallery}>
      <div className={styles.img}>
        <Image src='/wall_of_fame.jpg' alt="image" width="900" height="500" />
      </div>
      <div className={styles.img2}>
        <Image src='/CERT/CERT1.jpg' alt="image" width="500" height="700" />
        <Image src='/CERT/CERT2.jpg' alt="image" width="500" height="700" />
      </div>
      <div className={styles.textbelow}>
        <div style={{ textAlign: 'center' }}>Appreciation letter from Swinburne <br /> University Australia</div>
        <div>Association with JIO studios</div>
      </div>
      <div className={styles.buttons}>
        <div><Link href='/Alumni'><button className={styles.buttons_btn} id={styles.list} style={{ marginLeft: '38px' }} >Alumni List</button></Link></div>
        <div><button className={styles.buttons_btn} id="reviews" style={{ marginLeft: '38px', padding: '0 1.5vw' }} onClick={() => window.open('https://www.google.com/search?q=placing+dreams&sxsrf=ALiCzsbrTJEdus6Av5BtQv4zPLkb-xriIQ%3A1663228068015&ei=pNgiY_1L5o-vvA-iy5qQDQ&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYATIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ0oECEEYAEoECEYYAFAAWABgwg5oAXABeACAAQCIAQCSAQCYAQCgAQGwAQrAAQE&sclient=gws-wiz#')}>Google Reviews</button></div>
      </div>
    </div>
  );
}

export default WhatGPT3;

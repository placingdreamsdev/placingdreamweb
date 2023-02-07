import "../styles/globals.css";

import Head from "next/head";

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Placing Dreams</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Working in the film industry is considered to be one of the most tempting and glamorous careers of the 21st century, but is the way to the zenith really going to be a cakewalk? Definitely not. With the success rate less than most of the other career paths, it is really a difficult task to get into this profession, but everything is possible for a dreamer"
        />
        <meta
          name="keywords"
          content="best acting school, best acting school in mumbai, best direction in mumbai, acting school in mumbai,best diploma course for acting,acting institute in mumbai,which is the best acting course,best acting institute in india,acting courses in mumbai,acting courses near me,best acting classes in mumbai,Placing Dreams School of Acting"
        />
        <meta name="author" content="PLacing Dreams" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

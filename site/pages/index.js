import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/Link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <Link href="/about">
            <a>About Me</a>
          </Link>
          {" · "}
          <Link href="about">
            <a>Resume</a>
          </Link>
          {" · "}
          <Link href="/jiaming">
            <a>佳明</a>
          </Link>
          {" · "}
          <Link href="https://www.linkedin.com/in/eric-newcomer/">
            <a target="_blank">LinkedIn</a>
          </Link>
          {" · "}
          <Link href="https://github.com/eric-newcomer">
            <a target="_blank">GitHub</a>
          </Link>
          {" · "}
          <Link href="https://www.instagram.com/ericjnewcomer/">
            <a target="_blank">Instagram</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}

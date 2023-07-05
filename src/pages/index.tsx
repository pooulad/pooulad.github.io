import Head from "next/head";
import MainIndex from "@/components/Main/components/Index";
import AboutIndex from "@/components/About/components/Index";
import SkillIndex from "@/components/Skill/components/Index";
import ProjectIndex from "@/components/Project/components/Index";
import ContactIndex from "@/components/Contact/components/Index";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>امیرمهدی پولادی</title>
        <meta name="description" content="سایت نمونه کارهای امیرمهدی پولادی" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <MainIndex />
        </section>
        <section>
          <AboutIndex />
        </section>
        <section>
          <SkillIndex />
        </section>
        <section>
          <ProjectIndex />
        </section>
        <section>
          <ContactIndex />
        </section>
      </main>
    </Fragment>
  );
}

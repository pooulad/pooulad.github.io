import Head from "next/head";
import MainIndex from "@/components/Main/components/Index";
import AboutIndex from "@/components/About/components/Index";
import SkillIndex from "@/components/Skill/components/Index";
import ProjectIndex from "@/components/Project/components/Index";
import ContactIndex from "@/components/Contact/components/Index";
import { Fragment } from "react";
import Header from "@/components/Header/Index";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>سایت شخصی امیرمهدی پولادی</title>
        <meta name="description" content="سایت نمونه کارهای امیرمهدی پولادی" />
      </Head>
      <main>
        <header>
          <Header />
        </header>
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

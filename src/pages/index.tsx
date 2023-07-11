import Head from "next/head";
import { Fragment } from "react";
import MainIndex from "@/components/Main/components/Main";
import AboutIndex from "@/components/About/components/About";
import SkillIndex from "@/components/Skill/components/Skill";
import ProjectIndex from "@/components/Project/components/Project";
import ContactIndex from "@/components/Contact/components/Contact";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>سایت شخصی امیرمهدی پولادی</title>
        <meta name="description" content="وبسایت رزومه امیرمهدی پولادی" />
      </Head>
      <main>
        <div>
          <Header />
        </div>
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

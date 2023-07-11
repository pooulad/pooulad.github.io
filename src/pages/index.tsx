import Head from "next/head";
import { Fragment } from "react";
import MainIndex from "@/components/Main/components/Main";
import AboutIndex from "@/components/About/components/About";
import SkillIndex from "@/components/Skill/components/Skill";
import ProjectIndex from "@/components/Project/components/Project";
import ContactIndex from "@/components/Contact/components/Contact";
import Header from "@/components/Header/Header";
import Layout from "@/Layout";
import Image from "next/image";
import { dictionary } from "@/dictionary";
import ProfilePic from "../assets/images/profile-pic.png";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{dictionary.headTitle}</title>
        <meta name="description" content={dictionary.metaTitle} />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div>
              <Image src={ProfilePic} alt={dictionary.owner} className="w-full h-auto" />
            </div>
          </div>
        </Layout>
        {/* <section>
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
        </section> */}
      </main>
    </Fragment>
  );
}

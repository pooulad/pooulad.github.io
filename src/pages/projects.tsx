import Layout from "@/Layout";
import { GithubIcon } from "@/assets/ts";
import AnimatedText from "@/components/Common/AnimatedText/AnimatedText";
import { dictionary } from "@/dictionary";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, memo } from "react";
import project1Img from "../assets/images/project1.png";
import project2Img from "../assets/images/project2.png";
import project3Img from "../assets/images/project3.png";
import project4Img from "../assets/images/project4.png";

type FeaturedProjectProps = {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
  github: string;
};
const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl">
      <Link
        className="w-1/2 overflow-hidden cursor-pointer rounded-lg"
        href={link}
        target={"_blank"}
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col justify-between items-start pr-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target={"_blank"}
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target={"_blank"}>
            <GithubIcon />
          </Link>
          <Link
            className="mr-4 bg-dark text-light p-2 px-6 text-lg font-semibold rounded-lg"
            href={github}
            target={"_blank"}
          >
            {dictionary.projects.showProjectTitle}
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <Fragment>
      <Head>
        <title>{dictionary.head.projects.title}</title>
        <meta name="description" content={dictionary.head.projects.meta} />
      </Head>
      <main className="w-full flex flex-col items-center justify-center mb-16">
        <Layout className="pt-16">
          <AnimatedText text={dictionary.projects.title} className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title={dictionary.projects.project1.title}
                type={dictionary.projects.project1.type}
                summary={dictionary.projects.project1.summary}
                github={dictionary.projects.project1.github}
                link={dictionary.projects.project1.link}
                img={project1Img}
              />
            </div>
            <div className="col-span-6"></div>
            <div className="col-span-6"></div>
            <div className="col-span-12">
              <FeaturedProject
                title={dictionary.projects.project1.title}
                type={dictionary.projects.project1.type}
                summary={dictionary.projects.project1.summary}
                github={dictionary.projects.project1.github}
                link={dictionary.projects.project1.link}
                img={project4Img}
              />
            </div>
            <div className="col-span-6"></div>
            <div className="col-span-6"></div>
          </div>
        </Layout>
      </main>
    </Fragment>
  );
}

export default memo(projects);

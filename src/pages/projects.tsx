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
    <article>
      <Link href={link} target={"_blank"}>
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target={"_blank"}>
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target={"_blank"}>
            <GithubIcon />
          </Link>
          <Link href={github} target={"_blank"}>
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
          <AnimatedText text={dictionary.projects.title} />
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

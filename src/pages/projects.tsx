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
import project4Img from "../assets/images/project4.jpg";
import project5Img from "../assets/images/project5.png";
import project6Img from "../assets/images/project6.png";

type FeaturedProjectProps = {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
  github: string;
};
type SimpleProjectProps = {
  type: string;
  title: string;
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
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 overflow-hidden cursor-pointer rounded-lg lg:w-full"
        href={link}
        target={"_blank"}
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col justify-between items-start pr-6 lg:w-full lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target={"_blank"}
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target={"_blank"}>
            <GithubIcon />
          </Link>
          <Link
            className="mr-4 bg-dark text-light dark:text-dark dark:bg-light p-2 px-6 text-lg font-semibold rounded-lg sm:text-base sm:px-4"
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

const SimpleProject = ({
  title,
  type,
  img,
  link,
  github,
}: SimpleProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full overflow-hidden cursor-pointer rounded-lg"
        href={link}
        target={"_blank"}
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col justify-between items-start mt-2">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target={"_blank"}
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link className="w-8 md:w-6" href={github} target={"_blank"}>
            <GithubIcon />
          </Link>
          <Link
            className="text-lg font-semibold underline md:text-base"
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
      <main className="w-full flex flex-col items-center justify-center mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={dictionary.projects.title}
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
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
            <div className="col-span-6 sm:col-span-12">
              <SimpleProject
                title={dictionary.projects.project4.title}
                type={dictionary.projects.project4.type}
                github={dictionary.projects.project4.github}
                link={dictionary.projects.project4.link}
                img={project4Img}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SimpleProject
                title={dictionary.projects.project6.title}
                type={dictionary.projects.project6.type}
                github={dictionary.projects.project6.github}
                link={dictionary.projects.project6.link}
                img={project6Img}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={dictionary.projects.project5.title}
                type={dictionary.projects.project5.type}
                summary={dictionary.projects.project5.summary}
                github={dictionary.projects.project5.github}
                link={dictionary.projects.project5.link}
                img={project5Img}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SimpleProject
                title={dictionary.projects.project2.title}
                type={dictionary.projects.project2.type}
                github={dictionary.projects.project2.github}
                link={dictionary.projects.project2.link}
                img={project2Img}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SimpleProject
                title={dictionary.projects.project3.title}
                type={dictionary.projects.project3.type}
                github={dictionary.projects.project3.github}
                link={dictionary.projects.project3.link}
                img={project3Img}
              />
            </div>
          </div>
        </Layout>
      </main>
    </Fragment>
  );
}

export default memo(projects);

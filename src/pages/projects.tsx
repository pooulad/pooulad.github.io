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
    </Fragment>
  );
}

export default memo(projects);

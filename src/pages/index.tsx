import Head from "next/head";
import { Fragment } from "react";
import Layout from "@/Layout";
import Image from "next/image";
import { dictionary } from "@/dictionary";
import ProfilePic from "../assets/images/profile-pic.png";
import AnimatedText from "@/components/Common/AnimatedText/AnimatedText";
import Link from "next/link";
import { LinkIcon } from "@/assets/ts";
import { CustomLink } from "@/components/Common";
import Hireme from "@/components/Hireme/Hireme";
import LightBulb from "../assets/images/miscellaneous_icons_1.cd3c5e27.svg";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{dictionary.head.home.title}</title>
        <meta name="description" content={dictionary.head.home.meta} />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={ProfilePic}
                alt={dictionary.owner}
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text={dictionary.home.h1Tag}
                className="!text-6xl !text-right"
              />
              <p className="my-4 text-base font-medium">
                {dictionary.home.pTag}
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark  hover:bg-light border-2 border-solid border-transparent hover:border-dark"
                  href={"./poulad.pdf"}
                  target={"_blank"}
                >
                  <span className="mx-1">
                    <LinkIcon />
                  </span>
                  <span className="mx-1">{dictionary.home.resumeTitle}</span>
                </Link>
                <CustomLink
                  title={dictionary.home.contactMeTitle}
                  link={`mailto:${dictionary.ownerSocials.emailAddress}`}
                  classname="mx-4 font-bold"
                />
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className="absolute w-24 inline-block bottom-8 right-8">
          <Image
            className="w-full h-auto"
            alt={dictionary.ownerEn}
            src={LightBulb}
          />
        </div>
      </main>
    </Fragment>
  );
}

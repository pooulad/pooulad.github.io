import Layout from "@/Layout";
import AnimatedText from "@/components/Common/AnimatedText/AnimatedText";
import { dictionary } from "@/dictionary";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, memo, useEffect, useRef } from "react";
import ProfilePic2 from "../assets/images/profile-pic3.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "@/components/Skill/components/Skill";
import Experience from "@/components/Experience/components/Experience";

const AnimatedNumbers = ({ value }: any) => {
  const ref = useRef<any>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 5000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed();
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

function about() {
  return (
    <Fragment>
      <Head>
        <title>{dictionary.head.about.title}</title>
        <meta name="description" content={dictionary.head.about.meta} />
      </Head>
      <main className="flex items-center flex-col w-full justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="!text-6xl mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl sm:mb-8"
            text={dictionary.about.title}
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col col-span-3 items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {dictionary.about.biography}
              </h2>
              <p className="font-medium">{dictionary.about.p1}</p>
              <p className="font-medium my-4">{dictionary.about.p2}</p>
              <p className="font-medium">{dictionary.about.p3}</p>
            </div>
            <div className="col-span-3 bg-light p-8 relative h-max rounded-2xl border border-solid border-dark dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                className="rounded-2xl w-full h-auto"
                alt={dictionary.owner}
                src={ProfilePic2}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col col-span-2 justify-between items-end xl:col-span-8 xl:flex-row xl:items-center md:order-3 md:grid md:grid-cols-2">
              <div className="flex flex-col items-end justify-center md:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers
                    value={dictionary.about.summary.satisfiedClients.number}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {dictionary.about.summary.satisfiedClients.text}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center md:items-center">
                <span className="inline-block font-bold text-7xl md:py-3 md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers
                    value={dictionary.about.summary.projectsCompleted.number}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {dictionary.about.summary.projectsCompleted.text}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center md:items-center">
                <span className="inline-block font-bold text-7xl md:py-3 md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers
                    value={dictionary.about.summary.yearsOfExperience.number}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {dictionary.about.summary.yearsOfExperience.text}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center md:items-center">
                <span className="inline-block font-bold text-7xl md:py-3 md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers
                    value={dictionary.about.summary.workingHours.number}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {dictionary.about.summary.workingHours.text}
                </h2>
              </div>
            </div>
          </div>
          <Skill />
          <Experience />
        </Layout>
      </main>
    </Fragment>
  );
}

export default memo(about);

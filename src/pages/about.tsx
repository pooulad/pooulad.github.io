import Layout from "@/Layout";
import AnimatedText from "@/components/Common/AnimatedText/AnimatedText";
import { dictionary } from "@/dictionary";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, memo, useEffect, useRef } from "react";
import ProfilePic2 from "../assets/images/profile-pic3.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "@/components/Skill/components/Skill";

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
      console.log(latest);
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
      <main className="flex items-center flex-col w-full justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="!text-6xl mb-16"
            text={dictionary.about.title}
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="flex flex-col col-span-3 items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                {dictionary.about.biography}
              </h2>
              <p className="font-medium">{dictionary.about.p1}</p>
              <p className="font-medium my-4">{dictionary.about.p2}</p>
              <p className="font-medium">{dictionary.about.p3}</p>
            </div>
            <div className="col-span-3 bg-light p-8 relative h-max rounded-2xl border border-solid border-dark">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                className="rounded-2xl w-full h-auto"
                alt={dictionary.owner}
                src={ProfilePic2}
              />
            </div>
            <div className="flex flex-col col-span-2 justify-between items-end">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers
                    value={dictionary.about.experience.satisfiedClients.number}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  {dictionary.about.experience.satisfiedClients.text}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers
                    value={dictionary.about.experience.projectsCompleted.number}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  {dictionary.about.experience.projectsCompleted.text}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers
                    value={dictionary.about.experience.yearsOfExperience.number}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  {dictionary.about.experience.yearsOfExperience.text}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers
                    value={dictionary.about.experience.workingHours.number}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  {dictionary.about.experience.workingHours.text}
                </h2>
              </div>
            </div>
          </div>
          <Skill />
        </Layout>
      </main>
    </Fragment>
  );
}

export default memo(about);

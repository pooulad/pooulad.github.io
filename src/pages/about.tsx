import Layout from "@/Layout";
import AnimatedText from "@/components/Common/AnimatedText/AnimatedText";
import { dictionary } from "@/dictionary";
import Head from "next/head";
import React, { Fragment, memo } from "react";

function about() {
  return (
    <Fragment>
      <Head>
        <title>{dictionary.head.about.title}</title>
        <meta name="description" content={dictionary.head.about.meta} />
      </Head>
      <main className="flex items-center flex-col w-full justify-center">
        <Layout className="pt-16">
          <AnimatedText className="!text-6xl mb-16" text={dictionary.about.title} />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="flex flex-col col-span-3 items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                {dictionary.about.biography}
              </h2>
              <p className="font-medium">{dictionary.about.p1}</p>
              <p className="font-medium my-4">{dictionary.about.p2}</p>
              <p className="font-medium">{dictionary.about.p3}</p>
            </div>
          </div>
        </Layout>
      </main>
    </Fragment>
  );
}

export default memo(about);

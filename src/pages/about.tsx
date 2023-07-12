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
          <AnimatedText className="!text-6xl" text={dictionary.about.title} />
        </Layout>
      </main>
    </Fragment>
  );
}

export default memo(about);

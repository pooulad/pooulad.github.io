import { dictionary } from "@/dictionary";
import Head from "next/head";
import React, { Fragment, memo } from "react";

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

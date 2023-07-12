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
        
    </Fragment>
  );
}

export default memo(about);

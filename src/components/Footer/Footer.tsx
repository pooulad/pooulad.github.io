import Layout from "@/Layout";
import { dictionary } from "@/dictionary";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useEffect } from "react";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; تمامی حقوق محفوظ است</span>
        <div className="flex items-center">
          <span>ساخته شده با</span>
          <span className="text-primary text-2xl px-1">&#9825;</span>
          <span>
            توسط &nbsp;
            <Link
              className="underline underline-offset-2"
              href={dictionary.ownerGithubAddress}
              target={"_blank"}
            >
              poulad
            </Link>
          </span>
        </div>
        <a href="https://www.coffeebede.com/poulad">
          <img
            className="img-fluid w-52"
            src="https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg"
          />
        </a>
      </Layout>
    </footer>
  );
}

export default memo(Footer);

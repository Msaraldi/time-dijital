import Head from "next/head";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import AboutOne from "../components/abouts/AboutOne";

import BrandOne from "../components/brands/BrandOne";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import CounterOne from "../components/counters/CounterOne";
import Layout from "../components/layouts/Layout";
import PortfolioOne from "../components/portfolio/PortfolioOne";

import ServiceOne from "../components/services/ServiceOne";
import BannerOne from "../components/banners/BannerOne";

import TestimonialOne from "../components/testimonials/TestimonialOne";

const HomeOne = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Time Dijital</title>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1M1RLT16S0"></script>
      <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1M1RLT16S0');
      
      </script>
    
      </Head>

      <main className="page-wrapper">
        <BannerOne />

        <ServiceOne />

        <AboutOne />

        <PortfolioOne />

        <CounterOne />

        <TestimonialOne />

        <BrandOne />

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default HomeOne;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data/posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const mardownWithMeta = fs.readFileSync(
      path.join("data/posts", filename),
      "utf-8"
    );

    const { data: postdata } = matter(mardownWithMeta);

    return {
      slug,
      date: postdata.publishedAt,
      postdata,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}

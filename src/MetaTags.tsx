import React from "react";
import { Helmet } from "react-helmet-async";
import { AboutMeData } from "./types"; // adjust import path if needed

type Props = {
  info: AboutMeData;
};

const MetaTags: React.FC<Props> = ({ info }) => {
  const pageTitle = `${info.name} | ${info.role ?? "Portfolio"}`;
  const pageDescription = info.introduction || `${info.name}'s personal website and projects.`;
  const imageUrl = "https://zeeshan.world/images/preview.jpg";
  const siteUrl = "https://zeeshan.world";

  return (
    <Helmet>
      {/* Title + Description */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Extra for SEO */}
      <meta name="author" content={info.name} />
      <meta name="keywords" content={`${info.name}, portfolio, ${info.role ?? "developer"}`} />
    </Helmet>
  );
};

export default MetaTags;

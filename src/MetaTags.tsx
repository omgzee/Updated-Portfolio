import React from "react";
import { Helmet } from "react-helmet-async";
import { AboutMeData } from "./types"; // adjust import path if needed

// Define props
type Props = {
  info: AboutMeData;
};

const MetaTags: React.FC<Props> = ({ info }) => {
  return (
    <Helmet>
      <title>{info.name}'s Portfolio</title>
      <meta name="description" content={info.introduction} />

      {/* Open Graph tags */}
      <meta property="og:title" content={`${info.name}'s Portfolio`} />
      <meta property="og:description" content={info.introduction} />
      <meta
        property="og:image"
        content={`${process.env.PUBLIC_URL}/preview.jpg`}
      />
      <meta property="og:url" content="https://zeeshan.world" />
      <meta property="og:type" content="website" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${info.name}'s Portfolio`} />
      <meta name="twitter:description" content={info.introduction} />
      <meta
        name="twitter:image"
        content={`${process.env.PUBLIC_URL}/preview.jpg`}
      />
    </Helmet>
  );
};

export default MetaTags;

import React from "react";
import { Helmet } from "react-helmet-async";
export default function SEO({ title, description, keywords, logo }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

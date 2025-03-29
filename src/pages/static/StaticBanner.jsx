import React from "react";
import Banner from "../../components/common/StaticPages/Banner";

const StaticBanner = () => {
  const breadcrumbs = [
    { label: "Home", path: "/", isActive: false },
    { label: "Terms and conditions", path: "/static", isActive: true },
  ];

  return (
    <Banner
      title="Terms and Conditions"
      subtitle="Terms and Conditions"
      breadcrumbs={breadcrumbs}
    />
  );
};

export default StaticBanner;

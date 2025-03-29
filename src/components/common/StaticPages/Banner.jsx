import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section
      style={{
        background:
          "linear-gradient(to right, #B82D97 17%, #57B3D3 67%, #76ABFC)",
      }}
      className="text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between h-auto md:h-[352px] font-[OmnesArabic]"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-left">
        <h3 className="text-[24px] font-semibold">{subtitle}</h3>
        <h1 className="text-4xl md:text-[64px]  font-semibold leading-tight mt-2">
          {title}
        </h1>
        <div className="mt-4 text-[16px] flex space-x-2 text-white">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <Link
                to={breadcrumb.path}
                className={`font-semibold text-[16px] ${
                  breadcrumb.isActive ? "text-white" : "hover:underline"
                }`}
              >
                {breadcrumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && <span>›</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;

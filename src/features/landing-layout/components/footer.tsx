import Link from "next/link";
import React from "react";

const LayoutFooter = () => {
  return (
    <div className="bg-[#F6F6F7] border-t border-[#E8E8EA] py-16">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <div className="text-[#181A2A] text-base font-semibold mb-3">
              About
            </div>
            <div className="text-base text-[#696A75] font-normal mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="text-base text-[#3B3C4A] font-normal">
              <span className="text-[#181A2A] font-semibold">Email :</span>{" "}
              info@jstemplate.net
            </div>
            <div className="text-base text-[#3B3C4A] font-normal">
              <span className="text-[#181A2A] font-semibold">Phone :</span> 880
              123 456 789
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-[#181A2A] text-base font-semibold mb-6">
              Quick Link
            </div>
            <ul className="flex flex-col gap-2">
              {[
                { id: "home", label: "Home", href: "" },
                { id: "about", label: "About", href: "" },
                { id: "blog", label: "Blog", href: "" },
                { id: "archived", label: "Archived", href: "" },
                { id: "author", label: "Author", href: "" },
                { id: "contact", label: "Contact", href: "" },
              ].map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-[#3B3C4A] font-normal text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-2">
            <div className="text-[#181A2A] text-base font-semibold mb-6">
              Category
            </div>
            <ul className="flex flex-col gap-2">
              {[
                { id: "lifestyle", label: "Lifestyle", href: "" },
                { id: "technology", label: "Technology", href: "" },
                { id: "travel", label: "Travel", href: "" },
                { id: "business", label: "Business", href: "" },
                { id: "economy", label: "Economy", href: "" },
                { id: "sports", label: "Sports", href: "" },
              ].map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-[#3B3C4A] font-normal text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-4">
            <div className="bg-[#FFFFFF] rounded-xl p-9">
              <div className="text-[#181A2A] text-xl font-semibold text-center mb-2">
                Weekly Newsletter
              </div>
              <div className="text-[#696A75] text-base font-normal text-center mb-7">
                Get blog articles and offers via email
              </div>
              <div className="border border-[#DCDDDF] rounded-md py-3 px-4 mb-2">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-transparent outline-none"
                />
              </div>
              <button className="bg-[#4B6BFB] text-white text-base font-normal rounded-md p-3 w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutFooter;

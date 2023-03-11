import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#282828]">
      <div className="footer max-w-[1320px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-200">
        <div className="lg:col-span-2">
          <h1 className="text-2xl">
            Westwood <br /> Store
          </h1>
          <p className="py-4 pr-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            quidem facere explicabo fuga velit soluta, minus enim, quis quisquam
            provident officiis quas quia, dolore sed quos? Fugiat alias
            praesentium saepe voluptates dignissimos atque laborum suscipit
            necessitatibus quas, quia quos fuga similique officia dolores libero
            iure architecto eum nihil quis quasi.
          </p>
          <div className="flex justify-between items-center my-6 w-[20%]">
            <FaFacebook size={25} />
            <FaTwitter size={25} />
            <FaLinkedin size={25} />
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-between gap-4 w-full">
          <div>
            <h6 className="font-medium text-gray-400 pb-2">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 pb-2">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Docummentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 pb-2">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blogs</li>
              <li className="py-2 text-sm">Job</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Career</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 pb-2">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms and conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

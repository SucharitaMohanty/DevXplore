import React from "react";

function Footer() {
  return (
    <div className="bg-[#0e1015] py-3 px-3 text-[#fff] space-y-3 bottom-0">
    {/* <hr className="bg-white text-white w-[70%] mx-auto" /> */}
    <div className="flex justify-between">
      <p className="flex items-center space-x-1">
        <span className="text-2xl">&copy;</span>
        <div>2023 DevXplore, Bhubaneswar,
        India. All Rights Reserved.</div>
      </p>
      <p className="flex items-center space-x-6">
        <span className=""><a href="">Privacy Policy</a></span>
        <div><a href="">Terms and Conditions</a></div>
      </p>
    </div>
    </div>
  );
}

export default Footer;

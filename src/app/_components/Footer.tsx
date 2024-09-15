import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const socials = [
    "/icons/facebook.png",
    "/icons/instagram.png",
    "/icons/linkedin.png",
    "/icons/youtube.svg",
  ];

  const sendEmail = async () => {
    "use server";
    // await sendMail({
    //   to: "jean.paul.bassil@outlook.com",
    //   name: "Jean Paul Bassil",
    //   subject: "Hello",
    //   body: "This is a test email",
    // });
  };

  return (
    <div className="bg-[#ABC485] 2xl:px-24 xl:px-20 lg:px-16 md:px-10 sm:px-5 px-2 text-white pt-8 py-4 flex flex-col gap-4">
      <div className="flex flex-row justify-between max-md:flex-col gap-12">
        {/* Emails */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg mb-2">
            Sign up for exclusive news!
          </h1>
          <form
            action=""
            className="relative max-sm:w-3/4 min-w-[200px] max-w-[400px]"
          >
            <input
              placeholder="Your Email"
              type="email"
              className="w-full placeholder-zinc-50 border bg-[#ABC485] border-b-white border-t-[#ABC485] border-l-[#ABC485] border-r-[#ABC485] outline-none focus:outline-none"
            />
            <button
              className="flex gap-2 items-center justify-between absolute right-0 top-0"
              formAction={sendEmail}
            >
              <p>Subscribe</p>
              <Image
                src="/icons/right-arrow.png"
                alt="Subscribe"
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>
        {/* Our Store */}
        <div>
          <h1 className="font-semibold text-lg mb-2">Our Store</h1>
          <p>
            40 Adetokunbo Ademola Street <br /> Victoria Island, Lagos <br />
            T 234-814-159 6534 <br /> info@casalago.com
          </p>
        </div>
        {/* Socials */}
        <div>
          <h1 className="font-semibold text-lg mb-2">
            Stay Up To Date With The Latest Trends
          </h1>
          <div className="flex items-center gap-2">
            {socials.map((social, index) => (
              <Link
                href="/"
                className="border border-white rounded-full p-1 w-12 h-12 flex items-center justify-center"
                key={index}
              >
                <Image
                  src={social}
                  height={20}
                  width={20}
                  alt="Social"
                  className="w-6 h-6"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border  border-x-[#ABC485] border-b-[#ABC485] border-t-white py-2">
        <p>© 2024 Casalago - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

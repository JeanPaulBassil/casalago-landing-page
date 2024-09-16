import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="flex gap-2 py-8 max-md:py-4 items-end">
            <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] max-sm:w-[20px] max-sm:h-[20px] max-sm:-translate-y-[2px]"
            />
            <h1 className="text-4xl max-lg:text-xl max:-sm:text-lg font-bold translate-y-1">
                casalago
            </h1>
        </div>
    );
};

export default Header;

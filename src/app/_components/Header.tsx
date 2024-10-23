import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="flex gap-2 py-8 max-md:py-4 items-end">
            <Image
                src="/logo.png"
                alt="Logo"
                height={40}
                width={200}
                className="h-[40px] max-lg:h-[30px] max-sm:h-[20px] max-sm:-translate-y-[2px]"
            />
        </div>
    );
};

export default Header;

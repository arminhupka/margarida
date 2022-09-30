import tw from "tailwind-styled-components";

export const TWLinkButton = tw.a`
    relative
    py-4
    px-8
    inline-flex
    items-center
    text-xs
    font-semibold
    bg-primary
    uppercase
    transition-colors
    cursor-pointer
    tracking-wide

    before:content-[""]
    before:inline-block
    before:border-t
    before:w-10
    before:mr-4
    before:border-black

    hover:bg-primaryLight

`;

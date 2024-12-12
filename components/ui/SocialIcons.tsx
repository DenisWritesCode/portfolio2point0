"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function SocialIcons() {
  return (
    <div className="relative">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Link
            href="https://www.linkedin.com/in/denis-mutinda-241500191/"
            target="_blank"
          >
            <Icons.linkedin className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Link href="https://x.com/deniswritescode" target="_blank">
            <Icons.x className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/20 dark:bg-white/10 p-3">
          <Link
            href="https://discordapp.com/users/deniswritescode"
            target="_blank"
          >
            <Icons.discord className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Link
            href="https://www.reddit.com/user/DepthApprehensive845/"
            target="_blank"
          >
            <Icons.reddit className="size-full" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  discord: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 365.467"
      {...props}
    >
      <path
        fill="#fff"
        d="M378.186 365.028s-15.794-18.865-28.956-35.099c57.473-16.232 79.41-51.77 79.41-51.77-17.989 11.846-35.099 20.182-50.454 25.885-21.938 9.213-42.997 14.917-63.617 18.866-42.118 7.898-80.726 5.703-113.631-.438-25.008-4.827-46.506-11.407-64.494-18.867-10.091-3.947-21.059-8.774-32.027-14.917-1.316-.877-2.633-1.316-3.948-2.193-.877-.438-1.316-.878-1.755-.878-7.898-4.388-12.285-7.458-12.285-7.458s21.06 34.659 76.779 51.331c-13.163 16.673-29.395 35.977-29.395 35.977C36.854 362.395 0 299.218 0 299.218 0 159.263 63.177 45.633 63.177 45.633 126.354-1.311 186.022.005 186.022.005l4.388 5.264C111.439 27.645 75.461 62.305 75.461 62.305s9.653-5.265 25.886-12.285c46.945-20.621 84.236-25.885 99.592-27.64 2.633-.439 4.827-.878 7.458-.878 26.763-3.51 57.036-4.387 88.624-.878 41.68 4.826 86.43 17.111 132.058 41.68 0 0-34.66-32.906-109.244-55.281l6.143-7.019s60.105-1.317 122.844 45.628c0 0 63.178 113.631 63.178 253.585 0-.438-36.854 62.739-133.813 65.81l-.001.001zm-43.874-203.133c-25.006 0-44.75 21.498-44.75 48.262 0 26.763 20.182 48.26 44.75 48.26 25.008 0 44.752-21.497 44.752-48.26 0-26.764-20.182-48.262-44.752-48.262zm-160.135 0c-25.008 0-44.751 21.498-44.751 48.262 0 26.763 20.182 48.26 44.751 48.26 25.007 0 44.75-21.497 44.75-48.26.439-26.763-19.742-48.262-44.75-48.262z"
      />
    </svg>
  ),
  reddit: (props: IconProps) => (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      {...props}
    >
      <circle
        cx="-892"
        cy="179"
        r="262"
        fill="#ff4500"
        transform="matrix(.9771 0 0 .9771 1127.57 81.1)"
      />
      <g transform="translate(1.249 1.608) scale(1.99024)">
        <circle cx="200.6" cy="123.7" r="29.9" fill="url(#prefix___Radial1)" />
        <circle cx="55.4" cy="123.7" r="29.9" fill="url(#prefix___Radial2)" />
        <ellipse
          cx="128.1"
          cy="149.3"
          rx="85.3"
          ry="64"
          fill="url(#prefix___Radial3)"
        />
        <path
          d="M102.8 143.1c-.5 10.8-7.7 14.8-16.1 14.8-8.4 0-14.8-5.6-14.3-16.4.5-10.8 7.7-18 16.1-18 8.4 0 14.8 8.8 14.3 19.6zM183.6 141.5c.5 10.8-5.9 16.4-14.3 16.4s-15.6-3.9-16.1-14.8c-.5-10.8 5.9-19.6 14.3-19.6s15.6 7.1 16.1 18z"
          fill="#842123"
          fillRule="nonzero"
        />
        <path
          d="M153.3 144.1c.5 10.1 7.2 13.8 15 13.8s13.8-5.5 13.4-15.7c-.5-10.1-7.2-16.8-15-16.8s-13.9 8.5-13.4 18.7z"
          fill="url(#prefix___Radial4)"
          fillRule="nonzero"
        />
        <path
          d="M102.8 144.1c-.5 10.1-7.2 13.8-15 13.8s-13.8-5.5-13.3-15.7c.5-10.1 7.2-16.8 15-16.8s13.8 8.5 13.3 18.7z"
          fill="url(#prefix___Radial5)"
          fillRule="nonzero"
        />
        <path
          d="M128.1 165.1c-10.6 0-20.7.5-30.1 1.4-1.6.2-2.6 1.8-2 3.2 5.2 12.3 17.6 21 32.1 21s26.8-8.6 32.1-21c.6-1.5-.4-3.1-2-3.2-9.4-.9-19.5-1.4-30.1-1.4z"
          fill="#bbcfda"
          fillRule="nonzero"
        />
        <path
          d="M128.1 167.5c-10.6 0-20.7.5-30 1.5-1.6.2-2.6 1.8-2 3.3 5.2 12.5 17.6 21.3 32 21.3 14.4 0 26.8-8.8 32-21.3.6-1.5-.4-3.1-2-3.3-9.4-1-19.5-1.5-30-1.5z"
          fill="#fff"
          fillRule="nonzero"
        />
        <path
          d="M128.1 166.2c-10.4 0-20.3.5-29.5 1.4-1.6.2-2.6 1.8-2 3.2 5.2 12.3 17.3 21 31.5 21s26.3-8.6 31.5-21c.6-1.5-.4-3.1-2-3.2-9.2-.8-19.1-1.4-29.5-1.4z"
          fill="url(#prefix___Radial6)"
          fillRule="nonzero"
        />
        <circle cx="174.8" cy="55.5" r="21.2" fill="url(#prefix___Radial7)" />
        <path
          d="M127.8 88c-2.5 0-4.6-1.1-4.6-2.7 0-19 15.4-34.4 34.4-34.4 2.5 0 4.6 2.1 4.6 4.6 0 2.5-2.1 4.6-4.6 4.6-13.9 0-25.2 11.3-25.2 25.2 0 1.7-2.1 2.7-4.6 2.7z"
          fill="url(#prefix___Radial8)"
          fillRule="nonzero"
        />
        <path
          d="M97.3 149.1c0 3.9-4.2 5.7-9.3 5.7-5.1 0-9.3-1.8-9.3-5.7 0-3.9 4.2-7.1 9.3-7.1 5.1 0 9.3 3.1 9.3 7.1zM177.5 149.1c0 3.9-4.2 5.7-9.3 5.7-5.1 0-9.3-1.8-9.3-5.7 0-3.9 4.2-7.1 9.3-7.1 5.1 0 9.3 3.1 9.3 7.1z"
          fill="#ff6101"
          fillRule="nonzero"
        />
        <ellipse cx="94.4" cy="134.8" rx="3.3" ry="3.6" fill="#ffc49c" />
        <ellipse cx="173.3" cy="134.8" rx="3.3" ry="3.6" fill="#ffc49c" />
      </g>
      <defs>
        <radialGradient
          id="prefix___Radial1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(59.9015 0 0 -52.2545 201.012 107.557)"
        >
          <stop offset="0" stopColor="#feffff" />
          <stop offset=".4" stopColor="#feffff" />
          <stop offset=".51" stopColor="#f9fcfc" />
          <stop offset=".62" stopColor="#edf3f5" />
          <stop offset=".7" stopColor="#dee9ec" />
          <stop offset=".72" stopColor="#d8e4e8" />
          <stop offset=".76" stopColor="#ccd8df" />
          <stop offset=".8" stopColor="#c8d5dd" />
          <stop offset=".83" stopColor="#ccd6de" />
          <stop offset=".85" stopColor="#d8dbe2" />
          <stop offset=".88" stopColor="#ede3e9" />
          <stop offset=".9" stopColor="#ffebef" />
          <stop offset="1" stopColor="#ffebef" />
        </radialGradient>
        <radialGradient
          id="prefix___Radial2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(59.9015 0 0 -52.2545 55.892 107.557)"
        >
          <stop offset="0" stopColor="#feffff" />
          <stop offset=".4" stopColor="#feffff" />
          <stop offset=".51" stopColor="#f9fcfc" />
          <stop offset=".62" stopColor="#edf3f5" />
          <stop offset=".7" stopColor="#dee9ec" />
          <stop offset=".72" stopColor="#d8e4e8" />
          <stop offset=".76" stopColor="#ccd8df" />
          <stop offset=".8" stopColor="#c8d5dd" />
          <stop offset=".83" stopColor="#ccd6de" />
          <stop offset=".85" stopColor="#d8dbe2" />
          <stop offset=".88" stopColor="#ede3e9" />
          <stop offset=".9" stopColor="#ffebef" />
          <stop offset="1" stopColor="#ffebef" />
        </radialGradient>
        <radialGradient
          id="prefix___Radial3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(180.687 0 0 -126.865 130.347 99.176)"
        >
          <stop offset="0" stopColor="#feffff" />
          <stop offset=".4" stopColor="#feffff" />
          <stop offset=".51" stopColor="#f9fcfc" />
          <stop offset=".62" stopColor="#edf3f5" />
          <stop offset=".7" stopColor="#dee9ec" />
          <stop offset=".72" stopColor="#d8e4e8" />
          <stop offset=".76" stopColor="#ccd8df" />
          <stop offset=".8" stopColor="#c8d5dd" />
          <stop offset=".83" stopColor="#ccd6de" />
          <stop offset=".85" stopColor="#d8dbe2" />
          <stop offset=".88" stopColor="#ede3e9" />
          <stop offset=".9" stopColor="#ffebef" />
          <stop offset="1" stopColor="#ffebef" />
        </radialGradient>
        <radialGradient
          id="prefix___Radial4"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-15.0964 0 0 22.1628 165.28 150.971)"
        >
          <stop offset="0" stopColor="#f60" />
          <stop offset=".5" stopColor="#ff4500" />
          <stop offset=".7" stopColor="#fc4301" />
          <stop offset=".82" stopColor="#f43f07" />
          <stop offset=".92" stopColor="#e53812" />
          <stop offset="1" stopColor="#d4301f" />
        </radialGradient>
        <radialGradient
          id="prefix___Radial5"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(15.0964 0 0 22.1628 90.19 150.971)"
        >
          <stop offset="0" stopColor="#f60" />
          <stop offset=".5" stopColor="#ff4500" />
          <stop offset=".7" stopColor="#fc4301" />
          <stop offset=".82" stopColor="#f43f07" />
          <stop offset=".92" stopColor="#e53812" />
          <stop offset="1" stopColor="#d4301f" />
        </radialGradient>
        <radialGradient
          id="prefix___Radial6"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(53.2322 0 0 -35.1106 128.369 194.908)"
        >
          <stop offset="0" stopColor="#172e35" />
          <stop offset=".29" stopColor="#0e1c21" />
          <stop offset=".73" stopColor="#030708" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          id="prefix___Radial7"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(46.7274 0 0 -46.7274 175.312 34.106)"
        >
          <stop offset="0" stopColor="#feffff" />
          <stop offset=".4" stopColor="#feffff" />
          <stop offset=".51" stopColor="#f9fcfc" />
          <stop offset=".62" stopColor="#edf3f5" />
          <stop offset=".7" stopColor="#dee9ec" />
          <stop offset=".72" stopColor="#d8e4e8" />
          <stop offset=".76" stopColor="#ccd8df" />
          <stop offset=".8" stopColor="#c8d5dd" />
          <stop offset=".83" stopColor="#ccd6de" />
          <stop offset=".85" stopColor="#d8dbe2" />
          <stop offset=".88" stopColor="#ede3e9" />
          <stop offset=".9" stopColor="#ffebef" />
          <stop offset="1" stopColor="#ffebef" />
        </radialGradient>
        <radialGradient
          id="prefix___Radial8"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(38.3003 0 0 -38.3003 155.84 85.046)"
        >
          <stop offset="0" stopColor="#7a9299" />
          <stop offset=".48" stopColor="#7a9299" />
          <stop offset=".67" stopColor="#172e35" />
          <stop offset=".75" />
          <stop offset=".82" stopColor="#172e35" />
          <stop offset="1" stopColor="#172e35" />
        </radialGradient>
      </defs>
    </svg>
  ),
};

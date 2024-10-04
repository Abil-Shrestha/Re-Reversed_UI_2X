"use client";

import {motion} from "framer-motion";

const customEase = [0.25, 0.1, 0.25, 1];

export default function AnimatedGraph() {
  return (
    <div className="flex items-center justify-center p-20 aspect-[364/162]">
      <svg
        width="364"
        height="162"
        viewBox="0 0 364 162"
        fill="none"
        role="img"
        className="w-full h-full"
        aria-label="Animated graph showing increasing trend"
      >
        <defs>
          <clipPath id="clip">
            <motion.rect
              x="0"
              y="0"
              width="364"
              height="162"
              initial={{width: 0}}
              animate={{width: 364}}
              transition={{
                duration: 8,
                ease: customEase,
                repeat: Infinity,
              }}
            />
          </clipPath>
        </defs>

        <g clipPath="url(#clip)">
          <path
            d="M14.0855 136.948H0.232361V160.063C0.232361 160.694 0.74349 161.205 1.374 161.205H362.626C363.257 161.205 363.768 160.694 363.768 160.063V7.83003L348.529 27.0623C347.95 27.7922 346.789 27.56 346.535 26.664L339.619 2.20515C339.48 1.71355 339.032 1.37415 338.521 1.37415H318.801C318.497 1.37415 318.205 1.4957 317.991 1.71181L304.477 15.3355C304.141 15.6747 303.629 15.7685 303.194 15.5706L287.369 8.36919C286.741 8.08353 286.005 8.41541 285.804 9.07504L273.515 49.3394C273.247 50.217 272.106 50.4361 271.532 49.72L258.467 33.4128C257.95 32.7675 256.94 32.8688 256.561 33.6039L254.652 37.3111C254.331 37.9336 253.531 38.1235 252.965 37.7113L246.205 32.7895C245.656 32.3893 244.88 32.5553 244.543 33.1454L234.518 50.6624C234.266 51.1036 233.752 51.3247 233.258 51.2048L221.849 48.4359C221.257 48.2922 220.657 48.6386 220.485 49.223L207.648 92.8413C207.549 93.1756 207.304 93.4466 206.981 93.5773L188.476 101.062C187.942 101.278 187.331 101.063 187.051 100.56L174.171 77.4757C173.727 76.6802 172.576 76.6994 172.159 77.5093L166.688 88.1313C166.556 88.3867 166.333 88.5831 166.063 88.6814L153.695 93.184C153.371 93.3019 153.118 93.5599 153.006 93.886L145.621 115.395C145.498 115.752 145.207 116.026 144.842 116.125L128.067 120.705C127.824 120.772 127.609 120.917 127.457 121.119L116.342 135.833C115.907 136.409 115.053 136.442 114.575 135.9L106.181 126.393C105.805 125.967 105.172 125.883 104.697 126.196L78.4636 143.499C78.0728 143.756 77.5642 143.749 77.1806 143.481L68.5088 137.415C68.1093 137.135 67.5765 137.14 67.1824 137.427L59.2748 143.185C59.0795 143.327 58.8443 143.404 58.6028 143.404H41.7142C41.4112 143.404 41.1206 143.283 40.9065 143.069L24.4179 126.561C23.9339 126.077 23.135 126.124 22.7121 126.663L14.9836 136.511C14.7672 136.787 14.4361 136.948 14.0855 136.948Z"
            fill="url(#paint0_linear_0_947)"
          />

          <path
            d="M2.39622 136.948H13.5303C14.2314 136.948 14.8936 136.626 15.3265 136.074L21.9168 127.677C22.7626 126.599 24.3603 126.504 25.3284 127.473L40.5721 142.734C41.0003 143.163 41.5815 143.404 42.1875 143.404H58.2312C58.7142 143.404 59.1848 143.25 59.5752 142.966L66.1611 138.171C67.1134 137.478 68.4369 137.622 69.2166 138.506L76.3631 146.6C77.1747 147.519 78.5674 147.633 79.5177 146.858L103.823 127.037C104.774 126.262 106.166 126.376 106.978 127.296L113.65 134.853C114.606 135.935 116.314 135.87 117.184 134.718L127.222 121.429C127.526 121.026 127.956 120.736 128.443 120.603L144.259 116.284C144.988 116.085 145.572 115.538 145.817 114.823L152.829 94.4016C153.053 93.7494 153.56 93.2334 154.208 92.9975L165.644 88.8342C166.184 88.6377 166.629 88.2449 166.893 87.7342L171.184 79.4017C172.018 77.7821 174.32 77.7437 175.208 79.3347L186.56 99.6805C187.121 100.686 188.343 101.116 189.41 100.685L206.469 93.7842C207.115 93.5228 207.607 92.9807 207.803 92.3121L220.178 50.2667C220.522 49.098 221.723 48.4051 222.907 48.6925L232.424 51.0024C233.412 51.2422 234.44 50.8 234.945 49.9176L243.91 34.2513C244.585 33.071 246.136 32.7391 247.236 33.5395L251.888 36.9272C253.02 37.7515 254.621 37.3718 255.262 36.1268L255.756 35.1683C256.513 33.698 258.534 33.4954 259.568 34.7861L270.18 48.0327C271.328 49.4649 273.61 49.0268 274.146 47.2716L285.424 10.3201C285.827 9.0008 287.298 8.33703 288.554 8.90835L302.47 15.2413C303.34 15.6371 304.364 15.4495 305.037 14.7711L317.656 2.04947C318.085 1.61726 318.668 1.37415 319.277 1.37415H337.657C338.679 1.37415 339.576 2.05296 339.854 3.03616L345.821 24.1388C346.347 25.9985 348.802 26.4046 349.899 24.8132L361.604 7.83003"
            stroke="hsl(151 55% 41.5%)"
            strokeWidth="2.28329"
            strokeLinecap="round"
          />
        </g>

        <defs>
          <linearGradient
            id="paint0_linear_0_947"
            x1="182"
            y1="1.37415"
            x2="182"
            y2="161.205"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="hsl(141 43.7% 86%)" />
            <stop offset="1" stopColor="hsl(141 43.7% 86%)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const Backround = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden bg-main opacity-20">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] opacity-50"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </>
  );
};

export default Backround;

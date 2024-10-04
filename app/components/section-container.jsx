import {ArrowUpRight} from "@/app/components/icons";
import {cn} from "@/lib/utils";

export default function SectionContainer({title, link, className, children}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-xl p-4 min-h-[200px] w-full rounded-md pt-4 transition-colors items-center flex flex-col",
        className
      )}
    >
      <div className="flex text-center items ">
        <p className="text-md w-full py-4 font-semibold md:text-xl">{title}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center pt-8"
      >
        <span className="mr-1">Code</span>
        <ArrowUpRight
          className="stroke-grey-2 absolute top-0 ml-[1px] inline-block shrink-0"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}

import { CompanyFiveLogo } from "../icons/CompanyFiveLogo";
import { CompanyFourLogo } from "../icons/CompanyFourLogo";
import { CompanyOneLogo } from "../icons/CompanyOneLogo";
import { CompanyThreeLogo } from "../icons/CompanyThreeLogo";
import { CompanyTwoLogo } from "../icons/CompanyTwoLogo";


export function Companies() {
  return (
    <section className="w-full bg-neutral-100 py-10 md:py-14 border-y border-neutral-200">
      <div className="page-layout">
        <div className="col-span-12 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 px-4 md:px-0">
          <CompanyOneLogo className="text-[#82868E] h-8 md:h-10 w-auto" />
          <CompanyTwoLogo className="text-[#82868E] h-8 md:h-10 w-auto" />
          <CompanyThreeLogo className="text-[#82868E] h-8 md:h-10 w-auto" />
          <CompanyFourLogo className="text-[#82868E] h-8 md:h-10 w-auto" />
          <CompanyFiveLogo className="text-[#82868E] h-8 md:h-10 w-auto" />
        </div>
      </div>
    </section>
  );
}

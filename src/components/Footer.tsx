
import {
  FooterBrand,
  FooterTitle,
  FooterLinkGroup,
  FooterLink,
  FooterDivider,
  FooterIcon,
  FooterCopyright,
} from "flowbite-react";
import { TiSocialInstagram } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="md:px-60 px-4 flex flex-col">
      <FooterDivider  />
      <div className=" flex  mt-10">
        <div className="w-full">
          <div className="flex justify-between ">
            <div>
              <img
                className="md:w-28 w-14 md:h-28 h-14"
                src="/logo2.jpg"
                alt="logo"
              />
            </div>
            <div className="flex gap-8 md:flex-row flex-col sm:mt-4  ">
              <div>
                <FooterTitle title="Address and Phone" />
                <FooterLinkGroup col>
                  <span >Jl. Kemang Raya No.72 Jakarta Selatan</span>
                  <span>"(+689) 945304530"</span>
                </FooterLinkGroup>
              </div>
            
              <div>
                <FooterTitle  title="Follow Us" />
                <div className="mt-4 flex gap-4">
                  <FooterIcon href="#" icon={TiSocialInstagram} />
               
                  <FooterIcon href="#" icon={FaLinkedinIn} />
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
          <FooterDivider />
    </div>
  );
}

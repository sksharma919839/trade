import React from "react";
import { Link } from "react-router-dom";

const aboutItem = [
  {
    id: 0,
    p: "We at SafeTradeWorld(the 'Service','us', 'we', or 'our') deeply care about your (The client who is using SafeTradeWorld service) privacy. This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service. We will not use or share your information with anyone except as described in this Privacy Policy. We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://SafeTradeWorld.com",
  },
];

const termsItem = [
  {
    id: 0,
    h5: "Information Collection And Use",
    strong: "",
    p: "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, other information ('Personal Information').",
  },
  {
    id: 1,
    h5: "Log Data",
    strong: "",
    p: 'We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computers Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this type of information in order to increase our Services functionality. These third party service providers have their own privacy policies addressing how they use such information.',
  },
  {
    id: 2,
    h5: "Information Collection And Use ",
    strong: "   ",
    p: 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, other information ("Personal Information") like PAN, aadhar and bank details. These details are important for getting a KYC (Know your customer) compliance before you can use the platform.',
  },
  {
    id: 3,
    h5: "Cookies ",
    strong: " ",
    p: "Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. We use 'cookies' to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.",
  },
  {
    id: 4,
    h5: "Service Providers",
    strong: "",
    p: "We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
  },
  {
    id: 5,
    h5: "Security",
    strong: "",
    p: "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
  },
  {
    id: 6,
    h5: "Communications",
    strong: "",
    p: "We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
  },
  {
    id: 7,
    h5: "International Transfer",
    strong: "",
    p: "Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. If you are located outside India and choose to provide information to us, please note that we transfer the information, including Personal Information, to India and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.",
  },
  {
    id: 8,
    h5: "Links To Other Sites",
    strong: "",
    p: "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
  },
  {
    id: 9,
    h5: "Children's Privacy",
    strong: "",
    p: "Our Service does not address anyone under the age of 13 ('Children'). We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a children under age 13 without verification of parental consent, we take steps to remove that information from our servers.",
  },
  {
    id: 8,
    h5: "Changes To This Privacy Policy",
    strong: "",
    p: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
  },
  {
    id: 9,
    h5: "Contact Us",
    strong: "",
    p: "If you have any questions about this Privacy Policy, please contact us at support@SafeTradeWorld.com or via the contact form.",
  },
];
function About() {
  return (
    <>
      <div className="pt-[115px] ">
        <div className=" pt-[10px] bg-[#1d1a2e] rounded-b-[70px]">
          <div className="flex items-center justify-center mt-[10px] mb-[20px]">
            <h1 className="text-[36px] text-center text-[#ffffff] border-b-[#5949ff] border-b  border-b-[6px] w-[250px] rounded-3xl">
              Privacy Policy
            </h1>
          </div>
          <div className="flex  items-center justify-center pb-[60px]">
            <div className="flex items-center h-[34px] rounded-3xl w-[200px] justify-center bg-[#010103] py-[5px] px-[15px]">
              <Link
                to="/trade"
                className="text-[#ffffffbf] text-16px hover:text-[#4337c2] transition-all duration-500 mr-[5px]"
              >
                Home
              </Link>{" "}
              <p className="text-[16px] text-[#ffffff]">// Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="mt-[40px] flex item-center justify-center mb-[100px]">
          <div className="sm:w-[70%] w-[85%] h-auto bg-[#20202d] rounded-3xl">
            <div className="p-[30px]">
              {aboutItem.map((items) => (
                <p
                  key={items.id}
                  className="text-[15px] text-[#ffffffcc] mb-[24px]"
                >
                  {items.p}
                </p>
              ))}
            </div>
            <div className="p-[30px]">
              {termsItem.map((item) => (
                <div key={item.id}>
                  <h5 className="text-20px font-bold text-[#ffffff] mb-[27px]">
                    {item.h5}
                  </h5>
                  <p className="text-[15px] text-[#ffffffcc] mb-[24px]">
                    <strong>{item.strong}</strong>
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

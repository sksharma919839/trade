import React from "react";
import { Link } from "react-router-dom";

const aboutItem = [
  {
    id: 0,
    p: "This Risk Disclosure Statement (this “Statement”) applies to the electronic trading platform (including any applicable mobile applications and websites used to access the same) (collectively the “Platform”) provided byYugCXE Fintech Limited (the “Company”, “we”, “us” or “our”), and shall be deemed as part of the Service Agreement between the User and the Company (the “Service Agreement”). All capitalized terms that are used but not otherwise defined herein shall have the meanings ascribed to them in the Service Agreement.",
  },
  {
    id: 1,
    p: "In acceding to or using the Platform and the Site, you represent and warrant that you are fully aware of the risks associated with the transactions involving Digital Assets or the use of Platform. You agree and understand that you are solely responsible for determining the nature, potential value, suitability, and appropriateness of these risks for yourself, and that the Company does not give advice or recommendations regarding any Digital Asset, including the suitability and appropriateness of, and investment strategies for, any Digital Asset. You agree and understand that you access and use the Platform and the Site at your own risk. This brief statement does not disclose all of the risks associated with the Digital Assets and using the Platform. You should, therefore, carefully consider whether such use is suitable for you in light of your circumstances and financial resources. You should be aware that you may sustain a total loss of the Digital Assets in your Account, and that under certain market conditions, you may find it difficult or impossible to liquidate a position.",
  },
];

const termsItem = [
  {
    id: 0,
    h5: "1.Risks Relating to Digital Assets",
    strong: "",
    p: "·The price and value of any investment in Digital Asset products and the income, if any, from them, can fluctuate and may fall against your interest. An individual Digital Asset product may experience downward price movements and may under some circumstances even become valueless. An inherent risk of trading/investing in Digital Asset products is that losses may be incurred, rather than profits made, as a result of buying and selling such products.·Digital Assets are not legal tender and are not backed by the government, or by commodities such as gold or silver. There is no central bank that can take corrective measure to protect the value of Bitcoin and/or Ether and/or any other Digital Assets in a crisis or issue more Digital Assets. Instead, Bitcoin, Ether and any other Digital Assets are autonomous and largely unregulated on worldwide networks. Traders put their trust in a digital, decentralized and partially anonymous system that relies on peer-to-peer networking and cryptography to maintain its integrity.·Transactions in Digital Assets may be irreversible, and, accordingly, losses due to fraudulent or accidental transactions may not be recoverable;·Some Digital Asset transactions shall be deemed to be made when recorded on a public ledger, which is not necessarily the date or time that you initiated the transaction;·The value of Digital Assets may be derived from the continued willingness of market participants to exchange fiat currency or Digital Assets for Digital Assets, which may result in the potential for permanent and total loss of value of a particular Digital Asset should the market for that Digital Asset disappear;·The nature of Digital Assets may lead to an increased risk of fraud or cyber attack, and may mean that technological difficulties experienced by the Platform may prevent the access to or use of your Digital Assets;·Trading of Digital Assets is susceptible to irrational (or rational) bubbles or loss of confidence, which could collapse demand relative to supply. For example, confidence might collapse in Bitcoin because of unexpected changes imposed by the software developers or others, a government crackdown, the creation of superior competing alternative cryptocurrencies, or a deflationary or inflationary spiral. Confidence might also collapse if the anonymity of the system is compromised, if money is lost or stolen, or if hackers or governments can prevent any transactions from settling.·Deposits into your Account is not considered deposits under the applicable laws, rules, or regulations in your jurisdiction.·Digital Assets in your Account is not subject to applicable deposit insurance protection.",
  },
  {
    id: 1,
    h5: "2. Risks Relating to Derivatives, Margin and Security/Digital Asset Borrowing",
    strong: "",
    p: "·Derivatives products carry a high degree of risk as they often involve gearing or leverage, so that a relatively small movement in the price of the underlying Digital Asset results in a much larger movement, favourable or unfavourable, in the price of the product. If the direction of the trade is opposite to the fluctuation of the market, it will cause a large loss. Depending on the extent of the loss, investors need to add margins or reduce positions, otherwise, their positions may be forced to liquidate, and investors must bear all the losses caused thereby.·The risk of loss in financing a transaction by deposit of collateral may be significant. You may sustain losses in excess of your Digital Assets deposited as collateral with the Company. You may be called upon at short notice to make additional margin deposits or interest payments. If required margin deposit or interest payment is not made within the prescribed time, your collateral or positions may be liquidated by the Company at a loss without prior notification to you. You should therefore carefully consider whether such a financing arrangement is suitable in light of your own financial position and investment objectives.·When you borrow securities and/or Digital Assets from the Company, you will be required to deposit a required level of collateral. You may be called upon at short notice to place additional deposits if the level of collateral is inadequate in relation to the market value of borrowed assets. If the required deposit is not made within the prescribed time, the Company may buy back the borrowed securities and/or Digital Assets without prior notification to you. When you lend securities and/or Digital Assets to the Company, you temporarily lose legal ownership rights to the assets lent but in place, has a right to claim equivalent products.",
  },
  {
    id: 2,
    h5: "",
    strong: "3.Other Risks ",
    p: "·Legislative and regulatory changes or actions at the state, federal, or international level may adversely affect the use, transfer, exchange, and value of Digital Assets.·NEITHER THE COMPANY NOR THE PLATFORM IS REGISTERED AS A BROKER OR DEALER, A NATIONAL SECURITIES CHANGE, A CAPITAL MARKET SERVICE PROVIDER OR AN ALTERNATIVE TRADING SYSTEM IN ANY JURISDICTION. THE TRADING AND SETTLEMENT OF THE TRANSACTIONS REGARDING THE DIGITAL ASSETS ARE NOT OVERSIGHT BY ANY GOVERNMENTAL AUTHORITY OR SELF-REGULATORY INSTITUTION.·The Platform or the Site may become unavailable due to changes of applicable laws and you may suffer loss or incur liabilities due to the termination or suspension of the Platform or any or all of the Accounts.·The Company’s trading facilities are supported by computer-based component systems for the order-routing, execution, matching, registration or clearing of trades. As with all facilities and computer systems, customers will be exposed to risks associated with the systems including the failure of hardware and software. The result of any system failure may be that your order is either not executed according to instructions or is not executed at all. You should also be aware that the Internet is not a completely reliable transmission medium and there may be delays in service provisions.·You should note in particular that the proceeds from the sale of Digital Assets and other income may be or may become subject to tax, levies, duties or other fees or charges imposed by the authorities in that market, including taxation levied by withholding at source. Tax law and practice regarding Digital Assets in certain countries may not be clearly established. It is therefore possible that the current interpretation of the law or understanding of practice may change, or that the law may be changed with retrospective effect.",
  },
];
function About() {
  return (
    <>
      <div className="pt-[115px] ">
        <div className=" pt-[10px] bg-[#1d1a2e] rounded-b-[70px]">
          <div className="flex items-center justify-center mt-[10px] mb-[20px]">
            <h1 className="text-[36px] text-center text-[#ffffff] border-b-[#5949ff] w-[250px] rounded-3xl">
              KYC Policy
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
              <p className="text-[16px] text-[#ffffff]">// KYC Policy</p>
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

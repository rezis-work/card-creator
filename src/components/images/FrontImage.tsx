type InputCardProps = {
  cardName: string;
  cardDetails: string;
  cardMonthDate: string;
  cardYearDate: string;
  cvc: string;
};

export default function FrontImage({
  cardName,
  cardDetails,
  cardMonthDate,
  cardYearDate,
  cvc,
}: InputCardProps): JSX.Element {
  return (
    <div className="">
      <div className=" relative top-[36px] left-[73px] w-[285px] h-[156.208px] flex flex-col -z-9 md:top-[479px] md:ml-[275px] md:w-[447px] md:h-[245px]">
        <img
          src="./images/bg-card-back.png"
          alt=""
          className=" -z-10 mt-[-5px]"
        />
        <p className=" z-50 absolute top-[65px] left-[230px] text-[9px] text-[#FFFFFF] md:top-[105px] md:left-[353px] md:text-[14px]">
          {cvc ? cvc : "000"}
        </p>
      </div>
      <div className=" absolute top-[126.6px] left-[17px] w-[285px] h-[156.208px] flex flex-col md:top-[170px] md:left-[200px] md:w-[447px] md:h-[245px]">
        <img
          className=" w-[100%] -z-10 absolute"
          src="./images/bg-card-front.png"
          alt="card color"
        />
        <img
          src="./images/Group8.png"
          alt=""
          className=" z-50 w-[54px] mt-[17px] ml-[19px] md:w-[84px] md:h-[47px] md:ml-[50px]"
        />
        <p className="z-50 mt-[30.6px] ml-[19px] text-[18px] tracking-[2.2px] text-[#ffffff] md:mt-[60px] md:text-[28px] md:ml-[55px] md:tracking-[3.4px]">
          {cardDetails ? cardDetails : "0000 0000 0000 0000"}
        </p>
        <div className="z-50 mt-[30.6px] ml-[19px]  tracking-[2.2px] text-[#ffffff] flex justify-between mr-[20px] md:ml-[55px] md:mr-[65px]">
          <span className=" text-[9px] md:text-[14px]">
            {cardName ? cardName : "JANE APPLESEED"}
          </span>
          <span className=" text-[9px] md:text-[14px]">
            {cardMonthDate || cardYearDate
              ? `${cardMonthDate}/${cardYearDate}`
              : "00/00"}
          </span>
        </div>
      </div>
    </div>
  );
}

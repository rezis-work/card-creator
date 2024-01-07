import InputMask from "react-input-mask";

type InputCardProps = {
  cardName: string;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  cardDetails: string;
  setCardDetails: React.Dispatch<React.SetStateAction<string>>;
  cardMonthDate: string;
  cardYearDate: string;
  setCardMonthDate: React.Dispatch<React.SetStateAction<string>>;
  setCardYearDate: React.Dispatch<React.SetStateAction<string>>;
  cvc: string;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function InputCard({
  cardName,
  setCardName,
  cardDetails,
  setCardDetails,
  cardMonthDate,
  setCardMonthDate,
  cardYearDate,
  setCardYearDate,
  cvc,
  setCvc,
  check,
  setCheck,
}: InputCardProps): JSX.Element {
  function containsNoLetters(input: string): boolean {
    const regex = /[a-zA-Z]/;
    return regex.test(input);
  }
  return (
    <div>
      <div className=" flex flex-col md:justify-center md:mt-[150px]">
        <label className=" mb-[9px] text-[12px] text-[#21092F]">
          Cardholder Name
        </label>
        <input
          className={`${
            check && !cardName ? " border-[#FF5050]" : " border-[#DFDEE0]"
          }  border-[1px] border-solid w-[327px] h-[45px] rounded-[8px] text-[#21092F] bg[#ffffff] outline-none pl-4 pt-3 pb-4 text-18px placeholder:text-[#DFDEE0] md:w-[381px]`}
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        {!cardName && check && (
          <p className=" text-[#FF5050] text-[12px] mt-[8px]">
            Put your full name
          </p>
        )}
      </div>
      <div className=" flex flex-col mt-[20px]">
        <label className=" mb-[9px] text-[12px] text-[#21092F]">
          Card Number
        </label>
        <InputMask
          className={`${
            (containsNoLetters(cardDetails) || cardDetails === "") && check
              ? " border-[#FF5050]"
              : " border-[#DFDEE0]"
          } border-[1px] border-solid w-[327px] h-[45px] rounded-[8px] text-[#21092F] bg[#ffffff] outline-none pl-4 pt-3 pb-4 text-18px placeholder:text-[#DFDEE0] md:w-[381px]`}
          type="text"
          mask="**** **** **** ****"
          maskChar={null}
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardDetails}
          onChange={(e) => setCardDetails(e.target.value)}
        />
        {(containsNoLetters(cardDetails) || cardDetails === "") && check && (
          <p className=" text-[#FF5050] text-[12px] mt-[8px]">
            Wrong format, numbers only
          </p>
        )}
      </div>
      <div className=" flex  mt-[20px]">
        <div className="flex flex-col ">
          <label className=" mb-[9px] text-[12px] text-[#21092F]">
            Exp. Date (MM/YY)
          </label>
          <div className=" flex">
            <InputMask
              className={`${
                !cardMonthDate && check
                  ? " border-[#FF5050]"
                  : " border-[#DFDEE0]"
              } w-[80px] h-[45px]  border-[1px] mr-[8px] rounded-lg  text-[#21092F] placeholder:text-[#DFDEE0] pl-4 pt-3 pb-4 outline-none`}
              placeholder="MM"
              mask="99"
              maskChar={null}
              value={cardMonthDate}
              onChange={(e) => setCardMonthDate(e.target.value)}
            />
            <InputMask
              className={`${
                !cardYearDate && check
                  ? " border-[#FF5050]"
                  : " border-[#DFDEE0]"
              } w-[80px] h-[45px]  border-[1px] rounded-lg text-[#21092F] placeholder:text-[#DFDEE0] pl-4 pt-3 pb-4 outline-none `}
              placeholder="YY"
              mask="99"
              maskChar={null}
              value={cardYearDate}
              onChange={(e) => setCardYearDate(e.target.value)}
            />
          </div>
          {(!cardMonthDate || !cardYearDate) && check && (
            <p className="text-[#FF5050] text-[12px] mt-[8px]">
              Can’t be blank
            </p>
          )}
        </div>
        <div className="flex flex-col ml-[20px]">
          <div className="flex flex-col">
            <label className=" mb-[9px] text-[12px] text-[#21092F]">CVC</label>
            <InputMask
              mask="999"
              maskChar={null}
              className={`${
                !cvc && check ? " border-[#FF5050]" : " border-[#DFDEE0]"
              } w-[127px] h-[45px] border-[1px] rounded-lg text-[#21092F] placeholder:text-[#DFDEE0] pl-4 pt-3 pb-4 outline-none md:w-[195px]`}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="e.g. 123"
            />
          </div>
          {!cvc && check && (
            <p className="text-[#FF5050] text-[12px] mt-[8px]">
              Can’t be blank
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => setCheck(!check)}
        className=" mt-[25px] bg-[#21092F] text-[#ffffff] w-[100%] h-[53px] rounded-[8px] pt-[15px] pb-[15px] hover:bg-[#21092fe6] md:w-[381px]"
      >
        Confirm
      </button>
    </div>
  );
}

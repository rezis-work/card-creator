export default function Submited(): JSX.Element {
  return (
    <div className=" mt-[100px] pl-[24px] pr-[24px] flex flex-col text-center justify-center md:mt-0">
      <img
        src="./images/Group9.png"
        alt="submited img"
        className="mb-[35px] w-[80px] h-[80px] ml-auto mr-auto"
      />
      <h1 className=" text-[28px] mb-[16px] text-[#21092F]">THANK YOU!</h1>
      <p className=" text-[#8F8694] text-[18px] mb-[48px]">
        We’ve added your card details
      </p>
      <a
        href="https://rezis-work.github.io/farebank-upd/"
        className=" text-[18px] w-[100%] bg-[#21092F] text-[#ffffff] h-[53px] pt-[15px] pb-[15px] hover:bg-[#21092fe0] rounded-[8px]"
      >
        Continue
      </a>
    </div>
  );
}

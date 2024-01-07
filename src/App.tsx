import Submited from "./components/Submited/Submited";
import FrontImage from "./components/images/FrontImage";
import InputCard from "./components/inputs/InputCard";
import { useState } from "react";

function App() {
  const [cardName, setCardName] = useState<string>("");
  const [cardDetails, setCardDetails] = useState<string>("");
  const [cardMonthDate, setCardMonthDate] = useState<string>("");
  const [cardYearDate, setCardYearDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-14 md:flex-row main-div md:gap-96">
      <div className=" w-[100%] md:w-[483px] md:h-[100%]">
        <img
          className=" w-[100%] md:w-[483px] md:h-[100%] absolute -z-10"
          src="./images/bg-main-mobile.png"
          alt=""
        />
        <FrontImage
          cardName={cardName}
          cardDetails={cardDetails}
          cardMonthDate={cardMonthDate}
          cardYearDate={cardYearDate}
          cvc={cvc}
        />
      </div>
      {cardName &&
      cardDetails &&
      cardMonthDate &&
      cardYearDate &&
      cvc &&
      check ? (
        <Submited />
      ) : (
        <div className=" mt-[100px] ml-6 mr-6 text-[#21092F]">
          <InputCard
            cardName={cardName}
            setCardName={setCardName}
            cardDetails={cardDetails}
            setCardDetails={setCardDetails}
            cardMonthDate={cardMonthDate}
            setCardMonthDate={setCardMonthDate}
            cardYearDate={cardYearDate}
            setCardYearDate={setCardYearDate}
            cvc={cvc}
            setCvc={setCvc}
            check={check}
            setCheck={setCheck}
          />
        </div>
      )}
    </div>
  );
}

export default App;

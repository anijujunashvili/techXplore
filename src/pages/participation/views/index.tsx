import Loans from "./loans";
import Bills from "./bills";

const Participation = () => {
  const loansArr = [
    {
      title: "სამომხმარებლო სესხი",
      amount: "1234",
      duration: 24,
      paid: "12",
      date: "20/11/23",
      monthly: "6",
    },
  ];
  const billsArr = [
    {
      title: "თელასი",
      account_number: "1102343435",
      amount: "85",
      address: "ზურაბ ანჯაფარიძის #4",
      date: "20/11/23",
    },
    {
      title: "GWP",
      account_number: "1022343435",
      amount: "45",
      address: "ზურაბ ანჯაფარიძის #4",
      date: "20/11/23",
    },
    {
      title: "ენერგო პრო",
      account_number: "1042343435",
      amount: "45",
      address: "ზურაბ ანჯაფარიძის #4",
      date: "20/11/23",
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-4/5 mx-auto space-y-10">
          <Loans headline="სესხები" loans={loansArr} />
          <Bills headline="კომუნალურები" bills={billsArr} />
        </div>
      </div>
    </>
  );
};

export default Participation;

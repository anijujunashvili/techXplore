import Loans from "./loans";
import Bills from "./bills";
import { meAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";

const Participation = () => {
  const me = useAtomValue(meAtom);
  const navigate = useNavigate();

  const ifAuth = localStorage.getItem("authUser");
  if (!ifAuth) {
    navigate("/en/login");
  }
  const loansArr = me?.loans;
  const billsArr = me?.utilities;

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

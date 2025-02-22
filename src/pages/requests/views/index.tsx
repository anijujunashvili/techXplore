import { useNavigate } from "react-router-dom";
import BillsRequests from "./bills";
import LoansRequests from "./loans";

const RequestsPage = () => {
  const navigate = useNavigate();

  const ifAuth = localStorage.getItem("authUser");
  if (!ifAuth) {
    navigate("/en/login");
  }
  return (
    <div className="mx-auto flex flex-col gap-10">
      <BillsRequests />
      <LoansRequests />
    </div>
  );
};

export default RequestsPage;

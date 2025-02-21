import BillsRequests from "./bills";
import LoansRequests from "./loans";

const RequestsPage = () => {
  return (
    <div className="mx-auto flex flex-col gap-10">
      <BillsRequests />
      <LoansRequests />
    </div>
  );
};

export default RequestsPage;

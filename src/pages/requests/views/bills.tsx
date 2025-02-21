import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

const BillsRequests = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <Card className="w-full rounded-2xl px-4">
          <CardHeader className=" border-b">
            <CardTitle>მოთხოვნები კომუნალურის თანამონაწილეობაზე</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="flex flex-col">
              <div className="grid grid-cols-5 border-b gap-6 py-2 px-6  text-gray-800 text-sm cursor-pointer font-primaryMedium">
                <div>დასახელება</div>
                <div>აბონენტის ნომერი</div>
                <div>გადახდის თარიღი</div>
                <div>მომთხოვნის ვინაობა</div>

                <div></div>
              </div>
            </div>

            <div className="grid grid-cols-5 border-b items-center gap-6 py-4 px-6 hover:bg-gray-50 transition-all text-gray-600 cursor-pointer font-primaryMedium">
              <div className="text-gray-900">ენერგო პრო</div>
              <div>12345634</div>
              <div>20/11/2024</div>
              <div>გიორგი ნუცუბიძე</div>
              <div className="flex flex-row gap-4 justify-end">
                <div title="თანხმობა">
                  <Check className="text-green-700" />
                </div>
                <div title="უარი">
                  <X className="text-red-700" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end px-0"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BillsRequests;

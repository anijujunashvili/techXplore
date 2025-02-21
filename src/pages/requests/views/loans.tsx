import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Trash2, X } from "lucide-react";

const LoansRequests = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <Card className="w-full rounded-2xl px-4">
          <CardHeader className=" border-b">
            <CardTitle>მოთხოვნები სესხის თანამონაწილეობაზე</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="flex flex-col">
              <div className="grid grid-cols-10 border-b gap-8 py-2 px-6  text-gray-800 text-sm cursor-pointer font-primaryMedium">
                <div className="grid col-span-2">დასახელება</div>
                <div>თანხა</div>
                <div>გადახდილი თანხა</div>
                <div>გადახდის თარიღი</div>
                <div>თვეების ხანგრძლივობა</div>
                <div>მომთხოვნის ვინაობა</div>
                <div>თვიური გადასახადი</div>
                <div>გადახდის პროცენტი</div>
                <div></div>
              </div>
            </div>

            <div className="grid grid-cols-10 border-b items-center gap-8 py-4 px-6 hover:bg-gray-50 transition-all text-gray-600 cursor-pointer font-primaryMedium">
              <div className="text-gray-900 grid col-span-2">
                სამომხმარებლო სესხი
              </div>
              <div>1234 ₾</div>
              <div>123 ₾</div>
              <div>24/11/2024</div>
              <div>24</div>
              <div>გიორგი ნუცუბიძე</div>
              <div>56 ₾</div>
              <div>30%</div>
              <div className="flex flex-row gap-4 justify-end">
                <div title="თანხმობა">
                  <Check className="text-green-700" />
                </div>
                <div title="უარი">
                  <X className="text-red-700" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-10 border-b items-center font-bold gap-8 py-4 px-6 bg-gray-50 transition-all text-gray-600 cursor-pointer font-primaryMedium">
              <div className="text-gray-900 grid col-span-2">
                იპოთეკური სესხი
              </div>
              <div>1234567 ₾</div>
              <div>1000 ₾</div>
              <div>24/11/2028</div>
              <div>56</div>
              <div>გიორგი ნუცუბიძე</div>
              <div>500</div>
              <div>30%</div>
              <div className="flex flex-row gap-4 justify-end">
                <div title="წაშლა">
                  <Trash2 size={20} className="text-red-700" />
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

export default LoansRequests;

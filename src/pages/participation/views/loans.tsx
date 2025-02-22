import { Loan } from "@/types/login";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Loans = ({
  headline,
  loans,
}: {
  headline: string;
  loans: Loan[] | undefined;
}) => {
  return (
    <>
      <Card className="w-full rounded-2xl px-4">
        <CardHeader className=" border-b">
          <CardTitle>{headline}</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex flex-col">
            <div className="grid grid-cols-6 border-b gap-6 py-2 px-6  text-gray-800 text-sm cursor-pointer font-primaryMedium">
              <div>დასახელება</div>
              <div>თანხა</div>
              <div>ხანგრძლივობა</div>
              <div>გადახდილი თანხა</div>
              <div>ყოველთვიური გადასახადი</div>
              <div>გადასახადის თარიღი</div>
            </div>
          </div>
          {loans?.map((l) => (
            <div
              key={`loan-${l.id}`}
              className="grid grid-cols-6 border-b items-center gap-6 py-4 px-6 hover:bg-gray-50 transition-all text-gray-600 cursor-pointer font-primaryMedium"
            >
              <div className="text-gray-900">{l.name}</div>
              <div>{l.total_due} ₾</div>
              <div>24</div>
              <div>123 ₾</div>
              <div>{l.monthly_payment}₾</div>
              <div>{l.due_date}</div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-end px-0">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-primaryMedium ">
                მოთხოვნის გაგზავნა
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-sm font-primaryRegular">
                  სესხის თანამონაწილეობაზე მოთხოვნის გაგზავნა
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="აირჩიეთ სესხი" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="apple">
                          სამომხმარებლო სესხი
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className=" items-center gap-4">
                  <Input
                    id="name"
                    placeholder="მომხმარებლის პირადი ნომერი"
                    className="col-span-3"
                  />
                </div>
                <div className=" items-center gap-4">
                  <Input
                    id="name"
                    placeholder="გადასახადის %-ული მაჩვენებელი"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">გაგზავნა</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};

export default Loans;

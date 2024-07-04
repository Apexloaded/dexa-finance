import RegisterUser from "@/components/Auth/RegisterUser";
import Image from "next/image";
import { favicon } from "@/components/Icons/Connector";

export default function Register() {
  return (
    <div className="bg-primary/5 h-svh px-5">
      <div className="max-w-lg flex flex-col items-center mx-auto h-full justify-start">
        <div className="flex justify-center mt-20">
          <Image
            src={favicon.main}
            width={260}
            height={260}
            alt={`dexa`}
            className="h-14 w-14"
          />
        </div>
        <div className="text-center mb-6 mt-2">
          <p className="text-2xl font-semibold">Create an account</p>
          <p className="text-medium">
            Create a free dexa pay account to start accepting payments
          </p>
        </div>
        <div className="w-full border border-medium/30 bg-white rounded-xl p-5">
          <RegisterUser />
        </div>
      </div>
    </div>
  );
}

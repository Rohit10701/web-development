import { mydb } from "@/db";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const Form = () => {
  const postData =  (formData: FormData) => {
    "use server";
    const id = randomUUID();
    const data = formData.get("data") as string;
    mydb.push({
      id,
      data,
    });
    revalidatePath("/");
  };

  return (
    <div className="w-full h-[100vh] justify-center items-center flex flex-col gap-y-6 text-[#000] ">
      <form action={postData} className="flex flex-col">
        <input name="data" type="text" />
        <button type="submit" className="text-[#fff]">
          Submit
        </button>
      </form>
      <div>
        {mydb.map((data, index) => (
          <div key={index} className="text-[#fff]">
            {data.data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;

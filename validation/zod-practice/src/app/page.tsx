"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {

  const formSchema = z.object({
    inputbox: z.string().min(3).max(8)
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues  : {
      inputbox: "Initial value" // Set your desired default value here
    }
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        type="text"
        className="text-black"
        {...register("inputbox")} // Use form defaults
      />
      {errors.inputbox && <span>{errors.inputbox.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}


// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// export default function Home() {
//   const defaultValues = {
//     inputbox: "Initial value" // Set your desired default value here
//   };

//   const formSchema = z.object({
//     inputbox: z.string().min(3).max(8)
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     defaultValues: formDefaultValues // Access form defaults for visibility
//   } = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues // Provide the defaults to useForm
//   });

//   const submitForm = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(submitForm)}>
//       <input
//         type="text"
//         className="text-black"
//         {...register("inputbox", { defaultValue: formDefaultValues.inputbox })} // Use form defaults
//       />
//       {errors.inputbox && <span>{errors.inputbox.message}</span>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


import StepperForm from "@/components/base/stepper-form";
import { stepConfig } from "@/components/stepper-form/stepper-config";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <StepperForm config={stepConfig} />
    </div>
  );
}

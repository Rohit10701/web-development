import CounterStateComponent from "@/components/StateVsReact/State";
import CounterVariableComponent from "@/components/StateVsReact/Variable";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <div>
      <CounterStateComponent />
      <CounterVariableComponent />
    </div>
  );
};

export default Page;

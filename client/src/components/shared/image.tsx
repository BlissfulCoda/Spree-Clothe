import Button from "@components/shared/Button";

type CardProps = {
  num: number;
  name: string;
};

export default function CardContainer({ num, name }: CardProps): JSX.Element {
  return (
    <div
      className={`h-56 w-full bg-Model${num} bg-cover  bg-no-repeat bg-[length:480px_600px] bg-[right_top_0rem] flex items-end justify-center w-full rounded rounded-tr-none rounded-bl-none rounded-tl-2xl rounded-br-2xl shadow shadow-xl mt-1 p-2 `}
    >
      <Button className=" text-white text-md px-5 shadow-xl font-Montez font-regular mb-2">
        {name}
      </Button>
    </div>
  );
}

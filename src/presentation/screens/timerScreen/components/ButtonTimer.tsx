interface Props {
  title: string;
  bgColor?: string;
  handleClick: (time: any) => void;
}

const ButtonTimer = ({ title, bgColor, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer items-center justify-center rounded-full w-5/12 min-w-[105px] 
        ${bgColor ? `${bgColor} text-slate-50` : "bg-[#e7edf4]"}
          text-sm font-bold leading-normal`}
    >
      {title}
    </button>
  );
};

export default ButtonTimer;

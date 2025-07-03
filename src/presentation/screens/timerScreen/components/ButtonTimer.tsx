interface Props {
  title: string;
  handleClick: () => void;
}

const ButtonTimer = ({ title, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="cursor-pointer items-center justify-center rounded-full w-3/12 min-w-[105px] bg-[#3d98f4] text-slate-50 text-sm font-bold leading-normal"
    >
      {title}
    </button>
  );
};

export default ButtonTimer;

interface Props {
    isActive: boolean;
    title: string;
    handleClick: () => void;
}

export const StageIndicator = ({ title, isActive, handleClick }: Props) => {
    return (
        <label
            id={title}
            className={`flex cursor-pointer h-full grow items-center  justify-center  rounded-full px-2  text-sm
            ${
                isActive
                    ? 'bg-slate-50 shadow-[0_0_4px_rgba(0,0,0,0.1)] text-[#0d141c] font-medium'
                    : 'text-[#49739c] leading-normal'
            }
            `}
            onClick={handleClick}
        >
            <span className='truncate'>{title}</span>
        </label>
    );
};

export default StageIndicator;

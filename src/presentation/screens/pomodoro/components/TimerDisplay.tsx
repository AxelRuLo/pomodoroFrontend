interface Props {}

export const TimerDisplay = ({}: Props) => {
    return (
        <div className='flex flex-row w-full justify-evenly'>
            <Display value={0} title={'Minutes'} />
            <Display value={0} title={'seconds'} />
        </div>
    );
};

interface DisplayProps {
    value: number;
    title: string;
}
const Display = ({ value, title }: DisplayProps) => {
    return (
        <div className='flex flex-col w-5/12'>
            <div className='bg-[#e7edf4] h-15 flex items-center justify-center rounded-xl text-xl'>
                {value}
            </div>
            <div className='pt-2'>{title}</div>
        </div>
    );
};

export default TimerDisplay;

import StageIndicator from './StageIndicator';

interface Props {
    state: string;
    setPomodoroStage?: () => void;
}

export const PomodoroStatusBar = ({ state }: Props) => {
    return (
        <div className='w-5/6 min-w-[310px]'>
            <div className='flex h-10 flex-1 items-center justify-center rounded-full bg-[#e7edf4] p-1'>
                <StageIndicator
                    isActive={state == 'pomodoro'}
                    title={'Pomodoro'}
                    handleClick={() => {}}
                />
                <StageIndicator
                    isActive={state == 'shortBreak'}
                    title={'Short Break'}
                    handleClick={() => {}}
                />
                <StageIndicator
                    isActive={state == 'longBreak'}
                    title={'Large Break'}
                    handleClick={() => {}}
                />
            </div>
        </div>
    );
};

export default PomodoroStatusBar;

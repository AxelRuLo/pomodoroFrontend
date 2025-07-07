import { GeneralNavbar } from '../../components';
import {
    TimerControlButton,
    PomodoroStatusBar,
    TimerDisplay,
} from './components';
import setting from '../../../assets/png/setting.png';

export const PomodoroScreen = () => {
    return (
        <>
            <GeneralNavbar
                titleScreen={'Pomodoro'}
                pomodoroState={'pomodoro'}
                icon={setting}
                handleFunction={() => console.log('pending')}
            />
            <div className='flex items-center justify-center flex-col'>
                <PomodoroStatusBar state={'pomodoro'} />
                <div
                    id='timer_panel'
                    className='pt-5 px-4 flex flex-col w-full justify-between'
                >
                    <TimerDisplay />
                </div>

                <div
                    id='button_panel'
                    className='py-5 px-7 flex flex-col w-full h-32 justify-between'
                >
                    <div className='h-9 flex flex-row justify-evenly'>
                        <TimerControlButton
                            bgColor='bg-[#3d98f4]'
                            title={'start'}
                            handleClick={() => console.log('pending')}
                        />
                        <TimerControlButton
                            title={'reset'}
                            handleClick={() => console.log('pending')}
                        />
                    </div>
                    <div className='h-9 flex flex-row justify-evenly'>
                        <TimerControlButton
                            title={'skip'}
                            handleClick={() => console.log('pending')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PomodoroScreen;

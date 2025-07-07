import ModalComponent from './ModalComponent';

interface Props {
    titleScreen: string;
    pomodoroState: string;
    icon: string;
    handleFunction: () => void;
}

export const GeneralNavbar = ({
    pomodoroState,
    titleScreen,
    icon,
    handleFunction,
}: Props) => {
    return (
        <header>
            <div className='flex flex-row justify-between items-center  py-4 px-7'>
                <div className='flex-1'></div>
                <h2 className='text-xl font-bold text-center'>{titleScreen}</h2>
                <div className='flex-1 text-right'>
                    <ModalComponent
                        icon={icon}
                        title={pomodoroState}
                        handleChangeFunction={handleFunction}
                    />
                </div>
            </div>
        </header>
    );
};

export default GeneralNavbar;

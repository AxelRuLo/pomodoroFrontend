import { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';

interface ModalProps {
    icon: string;
    title: string;
    handleChangeFunction: (seconds: number, minutes: number) => void;
}

const ModalComponent = ({ icon, title, handleChangeFunction }: ModalProps) => {
    const [open, setOpen] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const toggleFunction = () => {
        setOpen((prev) => !prev);
    };

    const handleOnClickSave = () => {
        toggleFunction();
        handleChangeFunction(seconds, minutes);
    };

    const handleOnClickInputMinutes = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const inputValue = event.target.valueAsNumber;
        setMinutes(inputValue);
    };

    const handleOnClickInputSeconds = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const inputValue = event.target.valueAsNumber;
        setSeconds(inputValue);
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className='rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10'
            >
                <img src={icon} style={{ width: '30px', height: 'auto' }} />
            </button>
            <Dialog
                open={open}
                onClose={toggleFunction}
                className='relative z-10'
            >
                <DialogBackdrop
                    transition
                    className='fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
                />

                <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <DialogPanel
                            transition
                            className='relative transform overflow-hidden m-auto rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95'
                        >
                            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                                <div className='sm:flex sm:items-start'>
                                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                                        <DialogTitle
                                            as='h3'
                                            className='text-base font-semibold text-gray-900'
                                        >
                                            Configurations for {title}
                                        </DialogTitle>
                                        <div className='mt-2'>
                                            <Input
                                                label='minutes'
                                                value={minutes}
                                                setValue={
                                                    handleOnClickInputMinutes
                                                }
                                            />
                                            <Input
                                                label='seconds'
                                                value={seconds}
                                                setValue={
                                                    handleOnClickInputSeconds
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                                <button
                                    type='button'
                                    onClick={handleOnClickSave}
                                    className='inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto'
                                >
                                    Save
                                </button>
                                <button
                                    type='button'
                                    data-autofocus
                                    onClick={toggleFunction}
                                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto'
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default ModalComponent;

interface InputProps {
    label: string;
    value: number;
    setValue: (e: any) => void;
}
export const Input = ({ label, setValue, value }: InputProps) => {
    return (
        <div>
            <label
                htmlFor={label}
                className='block text-sm/6 font-medium text-gray-900 text-left'
            >
                {label}
            </label>
            <div className='mt-2'>
                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600'>
                    <div className='shrink-0 text-base text-gray-500 select-none sm:text-sm/6'></div>
                    <input
                        onChange={setValue}
                        id={label}
                        name={label}
                        value={isNaN(value) ? '' : value}
                        type='number'
                        placeholder='25'
                        className='block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                    />
                </div>
            </div>
        </div>
    );
};

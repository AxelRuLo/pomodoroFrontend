import ModalComponent from "./ModalComponent";

interface Props {
  titleScreen: string;
  icon: string;
  handleFunction: (seconds: number, minutes: number) => void;
}

const NavbarComponent = ({ titleScreen, icon, handleFunction }: Props) => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center  py-4 px-7">
        <div className="flex-1"></div>
        <h2 className="text-xl font-bold text-center">{titleScreen}</h2>
        <div className="flex-1 text-right">
          <ModalComponent
            icon={icon}
            title={titleScreen}
            handleChangeFunction={handleFunction}
          />
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;

import ModalComponent from "./ModalComponent";

interface Props {
  titleScreen: string;
  icon: string;
  handleFunction?: () => void;
}

const NavbarComponent = ({ titleScreen, icon }: Props) => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center  py-4 px-7">
        <div className="flex-1"></div>
        <h2 className="text-xl font-bold text-center">{titleScreen}</h2>
        <div className="flex-1 text-right">
          <ModalComponent icon={icon} />
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;

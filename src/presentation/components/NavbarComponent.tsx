interface Props {
  titleScreen: string;
  icon: string;
}

const NavbarComponent = ({ titleScreen, icon }: Props) => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center  py-4 px-7">
        <div className="flex-1"></div>
        <h2 className="text-xl font-bold text-center">{titleScreen}</h2>
        <div className="flex-1 text-right">{icon}</div>
      </div>
    </header>
  );
};

export default NavbarComponent;

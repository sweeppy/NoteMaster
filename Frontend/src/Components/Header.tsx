interface Props {
  children: string;
}
const Header = ({ children }: Props) => {
  return (
    <header className="header font-weight-800 font-ultra-large">
      {children}
    </header>
  );
};

export default Header;

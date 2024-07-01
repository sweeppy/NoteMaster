interface Props {
  children: string;
}
const StartButton = ({ children }: Props) => {
  return <button className="btn-start main-font">{children}</button>;
};

export default StartButton;

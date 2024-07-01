interface Props {
  children: string;
}
const AuthHeader = ({ children }: Props) => {
  return <div className="font-large">{children}</div>;
};

export default AuthHeader;

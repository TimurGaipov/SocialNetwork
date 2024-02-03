interface IAuthLink {
  path: string;
  linkText: string;
}

export const AuthLink = ({ path, linkText }: IAuthLink) => {
  return <a href={path}>{linkText}</a>;
};

export type CardPropsType = {
  className: string;
  plain?: boolean;
  profile?: boolean;
  chart?: boolean;
  children?: React.ReactNode;
};

export type CardAvatarPropsType = {
  children?: React.ReactNode;
  className: string;
  profile?: boolean;
  plain?: boolean;
};

export type CardBodyPropsType = {
  className: string;
  plain?: boolean;
  profile?: boolean;
  children: React.ReactNode;
};

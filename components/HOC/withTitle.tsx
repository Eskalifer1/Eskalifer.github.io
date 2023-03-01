import React from "react";

interface WithTitleProps {
  titleHead: string;
}

export function withTitle<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithTitleProps> {
  const WrappedComponent: React.FC<P & WithTitleProps> = ({
    titleHead,
    ...props
  }) => {
    return (
      <>
      <h2 className="font-[Chivo] text-[25px] font-bold pl-4 mb-2 sm:text-lg">{titleHead}</h2>
        <Component {...(props as P)} />
      </>
    );
  };

  return WrappedComponent;
}

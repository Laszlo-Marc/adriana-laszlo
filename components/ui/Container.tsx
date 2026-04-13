import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type ContainerSize = "narrow" | "default" | "wide" | "full";
type ContainerPadding = "none" | "sm" | "default" | "lg";

type ContainerOwnProps = {
  size?: ContainerSize;
  padding?: ContainerPadding;
  children: ReactNode;
  className?: string;
};

type ContainerProps<T extends ElementType = "div"> = ContainerOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof ContainerOwnProps | "as">;

const sizeStyles: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[1600px]",
  full: "max-w-none",
};

const paddingStyles: Record<ContainerPadding, string> = {
  none: "",
  sm: "px-4 md:px-6",
  default: "px-5 md:px-8 lg:px-12",
  lg: "px-6 md:px-12 lg:px-20",
};

export default function Container<T extends ElementType = "div">({
  as,
  size = "default",
  padding = "default",
  children,
  className = "",
  ...rest
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={`
        w-full mx-auto
        ${sizeStyles[size]}
        ${paddingStyles[padding]}
        ${className}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
}

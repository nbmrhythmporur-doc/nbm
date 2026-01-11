"use client";

import Link from "next/link";

export default function Button({
  href,
  children,
  className = "",
  width,
  height,
  ...props
}) {
  const style =
    width || height
      ? {
          width,
          height,
        }
      : undefined;

  const classes = `btn-primary ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} style={style} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  );
}

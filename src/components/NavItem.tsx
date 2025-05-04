import { Link } from "@tanstack/react-router";
import { css } from "../../styled-system/css";

interface NavItemProps {
  label: string;
  href?: string;
  isHome: boolean;
  dropdownItems?: Array<{
    label: string;
    href: string;
  }>;
}

export function NavItem({ label, href, isHome, dropdownItems }: NavItemProps) {
  if (href) {
    return (
      <Link
        to={href}
        className={css({
          color: isHome ? "brand.cream" : "gray.600",
          _hover: { color: "gray.900" },
        })}
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      className={css({
        position: "relative",
        _hover: { "& > div": { display: "block" } },
      })}
    >
      <button
        className={css({
          color: isHome ? "brand.cream" : "gray.600",
          _hover: { color: "gray.900" },
          display: "flex",
          alignItems: "center",
          gap: "1",
        })}
      >
        {label}
        <span
          className={css({
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: "4px solid currentColor",
            ml: "1",
          })}
        />
      </button>
      <div
        className={css({
          position: "absolute",
          top: "100%",
          left: "0",
          display: "none",
          bg: isHome ? "brand.cream" : "white",
          border: "1px solid",
          borderColor: isHome ? "brand.cream" : "gray.200",
          borderRadius: "sm",
          p: "2",
          minW: "48",
          boxShadow: "md",
        })}
      >
        {dropdownItems?.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={css({
              display: "block",
              p: "2",
              color: isHome ? "brand.darkBrown" : "gray.600",
              borderBottom: isHome ? "1px solid" : "none",
              borderColor: "transparent",
              _hover: {
                color: isHome ? "brand.darkBrown" : "gray.900",
                bg: isHome ? "transparent" : "gray.50",
                borderBottom: isHome ? "1px solid" : "none",
              },
            })}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

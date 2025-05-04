import { Link } from "@tanstack/react-router";
import { css } from "../../styled-system/css";
import { useState } from "react";

interface NavItemProps {
  label: string;
  href?: string;
  dropdownItems?: Array<{
    label: string;
    href: string;
  }>;
  closeMenu: () => void;
}

export function NavItem({ label, href, dropdownItems, closeMenu }: NavItemProps) {
  const [expanded, setExpanded] = useState(false);

  if (href) {
    return (
      <Link
        to={href}
        className={css({
          color: {base: "brand.darkBrown", lg: "brand.cream"},
          _hover: {
            borderBottom: "2px solid",
          },
        })}
        onClick={() => {
          closeMenu();
        }}
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      className={css({
        position: "relative",
        _hover: { '& > div': { display: { lg: "block" } } },
      })}
    >
      <button
        className={css({
          color: {base: "brand.darkBrown", lg: "brand.cream"},
          display: "flex",
          alignItems: "center",
          gap: "1",
        })}
        onClick={() => {
          setExpanded((v) => !v);
        }}
        aria-expanded={expanded}
        aria-haspopup={!!dropdownItems}
        type="button"
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
      {/* Dropdown for base (inline, indented) and lg (absolute, hover) */}
      {dropdownItems && (
        <div
          className={css({
            display: {
              base: expanded ? "block" : "none",
              lg: "none",
            },
            marginTop: {base: 4, lg: 0},
            position: { base: "static", lg: "absolute" },
            top: { lg: "100%" },
            left: { lg: "0" },
            pl: { base: 2, lg: 0 }, // Indent for base
            bg: { lg: "brand.cream" },
            border: { lg: "1px solid" },
            borderColor: { lg: "brand.cream" },
            borderRadius: { lg: "sm" },
            p: { lg: "2" },
            minW: { lg: "48" },
            boxShadow: { lg: "md" },
            zIndex: { lg: 10 },
          })}
        >
          {dropdownItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={css({
                display: "block",
                p: "2",
                color: "brand.darkBrown",
                borderBottom: "1px solid",
                borderColor: "transparent",
                _hover: {
                  color: "brand.darkBrown",
                  borderBottom: "1px solid",
                },
              })}
              onClick={() => {
                setExpanded(false);
                closeMenu();
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
      {/* lg dropdown for hover */}
      <div
        className={css({
          position: "absolute",
          top: "100%",
          left: "0",
          display: { base: "none", lg: "none" },
          _groupHover: { display: { lg: "block" } },
          bg: "brand.cream",
          border: "1px solid",
          borderColor: "brand.cream",
          borderRadius: "sm",
          p: "2",
          minW: "48",
          boxShadow: "md",
          zIndex: 10,
        })}
      >
        {dropdownItems?.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={css({
              display: "block",
              p: "2",
              color: "brand.darkBrown",
              borderBottom: "1px solid",
              borderColor: "transparent",
              _hover: {
                color: "brand.darkBrown",
                borderBottom: "1px solid",
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

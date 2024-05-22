/**
 * @file
 * @copyright 2022 Aleksej Komarov
 * @license MIT
 */

import { Component, createRef, type ReactNode, type RefObject } from "react";

import { classes } from "../common/react";
import { Box } from "./Box";
import { Icon } from "./Icon";

type MenuProps = {
  children: any;
  menuRef: RefObject<HTMLElement>;
  onOutsideClick: () => void;
  width: string;
};

class Menu extends Component<MenuProps> {
  private readonly handleClick: (event) => void;

  constructor(props) {
    super(props);
    this.handleClick = (event) => {
      if (!this.props.menuRef.current) {
        return;
      }

      if (this.props.menuRef.current.contains(event.target)) {
      } else {
        this.props.onOutsideClick();
      }
    };
  }

  componentWillMount() {
    window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  render() {
    const { children, width } = this.props;
    return (
      <div
        className={"MenuBar__menu"}
        style={{
          width: width,
        }}
      >
        {children}
      </div>
    );
  }
}

type MenuBarDropdownProps = {
  children: any;
  className?: string;
  disabled?: boolean;
  display: any;
  onClick: () => void;
  onMouseOver: () => void;
  onOutsideClick: () => void;
  open: boolean;
  openWidth: string;
};

class MenuBarButton extends Component<MenuBarDropdownProps> {
  private readonly menuRef: RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.menuRef = createRef();
  }

  render() {
    const { props } = this;
    const {
      children,
      disabled,
      display,
      onClick,
      onMouseOver,
      onOutsideClick,
      open,
      openWidth,
      ...boxProps
    } = props;
    const { className, ...rest } = boxProps;

    return (
      <div ref={this.menuRef}>
        <Box
          className={classes([
            "MenuBar__MenuBarButton",
            "MenuBar__font",
            "MenuBar__hover",
            className,
          ])}
          {...rest}
          onClick={disabled ? () => null : onClick}
          onMouseOver={onMouseOver}
        >
          <span className="MenuBar__MenuBarButton-text">{display}</span>
        </Box>
        {open && (
          <Menu
            menuRef={this.menuRef}
            onOutsideClick={onOutsideClick}
            width={openWidth}
          >
            {children}
          </Menu>
        )}
      </div>
    );
  }
}

type MenuBarItemProps = {
  children: any;
  className?: string;
  disabled?: boolean;
  display: ReactNode;
  entry: string;
  openMenuBar: string | null;
  openOnHover: boolean;
  openWidth: string;
  setOpenMenuBar: (entry: string | null) => void;
  setOpenOnHover: (flag: boolean) => void;
};

export const Dropdown = (props: MenuBarItemProps) => {
  const {
    children,
    className,
    disabled,
    display,
    entry,
    openMenuBar,
    openOnHover,
    openWidth,
    setOpenMenuBar,
    setOpenOnHover,
  } = props;

  return (
    <MenuBarButton
      className={className}
      disabled={disabled}
      display={display}
      onClick={() => {
        const open = openMenuBar === entry ? null : entry;
        setOpenMenuBar(open);
        setOpenOnHover(!openOnHover);
      }}
      onMouseOver={() => {
        if (openOnHover) {
          setOpenMenuBar(entry);
        }
      }}
      onOutsideClick={() => {
        setOpenMenuBar(null);
        setOpenOnHover(false);
      }}
      open={openMenuBar === entry}
      openWidth={openWidth}
    >
      {children}
    </MenuBarButton>
  );
};

type MenuBarItemToggleProps = {
  checked: boolean;
  displayText: ReactNode;
  onClick: (value: string) => void;
  value: string;
};

const MenuItemToggle = (props: MenuBarItemToggleProps) => {
  const { checked, displayText, onClick, value } = props;
  return (
    <Box
      className={classes([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__MenuItemToggle",
        "MenuBar__hover",
      ])}
      onClick={() => onClick(value)}
    >
      <div className="MenuBar__MenuItemToggle__check">
        {checked && <Icon name="check" size={1.3} />}
      </div>
      {displayText}
    </Box>
  );
};

Dropdown.MenuItemToggle = MenuItemToggle;

type MenuItemProps = {
  displayText: ReactNode;
  onClick: (value: string) => void;
  value: string;
};

const MenuItem = (props: MenuItemProps) => {
  const { displayText, onClick, value } = props;
  return (
    <Box
      className={classes([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__hover",
      ])}
      onClick={() => onClick(value)}
    >
      {displayText}
    </Box>
  );
};

Dropdown.MenuItem = MenuItem;

const Separator = () => {
  return <div className="MenuBar__Separator" />;
};

Dropdown.Separator = Separator;

type MenuBarProps = {
  children: any;
};

export const MenuBar = (props: MenuBarProps) => {
  const { children } = props;
  return <Box className="MenuBar">{children}</Box>;
};

MenuBar.Dropdown = Dropdown;

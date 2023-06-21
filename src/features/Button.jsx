import { Link } from "react-router-dom";

const buttonClasses = (variant, size, highlight) => {
  let classes = "relative rounded-full inline-flex items-center";

  if (variant === "primary") {
    classes += ` bg-primary-gradient hover:text-shadow group-hover:text-shadow hover:shadow-primary group-hover:shadow-primary transition-[shadow,text-shadow] ${
      highlight && "ml-2"
    }`;
  } else if (variant === "secondary") {
    classes += ` text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in ${
      highlight && "bg-transparent-white rounded-full px-2"
    } ${highlight && highlight + ":last-child"} ml-2 ${
      highlight && highlight + ":last-child"
    } -mr-2 ${highlight && highlight + ":first-child"} -ml-2 ${
      highlight && highlight + ":first-child"
    } mr-2`;
  }

  if (size === "small") {
    classes += " text-xs px-3 h-7";
  } else if (size === "medium") {
    classes += " text-sm px-4 h-8";
  } else if (size === "large") {
    classes += " text-md px-6 h-12";
  }

  return classes;
};

const Highlight = ({ children, className }) => (
  <span className={`highlight ${className}`}>{children}</span>
);

const Button = ({ children, variant, size, ...props }) => {
  const highlight = props.className ? "&_" + props.className : "";
  const classes = buttonClasses(variant, size, highlight);

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export { Button, Highlight };

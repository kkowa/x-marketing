import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

interface GradientButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  text?: string;
}

const styles = {
  button:
    "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-[60px] group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
  span: "relative px-4 py-0.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-[60px] group-hover:bg-transparent group-hover:dark:bg-transparent",
  container: "flex justify-center items-center w-[141px] h-[35px]",
  text: "mr-[10px] text-white",
};

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, asChild = false, children, text, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`${styles.button} ${className || ""}`}
        ref={ref}
        {...props}
      >
        <span className={styles.span}>
          <div className={styles.container}>
            {text && <p className={styles.text}>{text}</p>}
            {children}
          </div>
        </span>
      </Comp>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };

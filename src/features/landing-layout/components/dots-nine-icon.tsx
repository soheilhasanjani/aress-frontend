import React, { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const DotsNineIcon: React.FC<ComponentProps<"svg">> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
      {...props}
    >
      <path
        d="M9 7.5C9 7.79667 8.91203 8.08668 8.74721 8.33336C8.58238 8.58003 8.34811 8.77229 8.07403 8.88582C7.79994 8.99935 7.49834 9.02906 7.20737 8.97118C6.91639 8.9133 6.64912 8.77044 6.43934 8.56066C6.22956 8.35088 6.0867 8.08361 6.02882 7.79264C5.97094 7.50166 6.00065 7.20006 6.11418 6.92598C6.22771 6.65189 6.41997 6.41762 6.66665 6.2528C6.91332 6.08797 7.20333 6 7.5 6C7.89783 6 8.27936 6.15804 8.56066 6.43934C8.84197 6.72065 9 7.10218 9 7.5ZM16 6C15.7033 6 15.4133 6.08797 15.1666 6.2528C14.92 6.41762 14.7277 6.65189 14.6142 6.92598C14.5007 7.20006 14.4709 7.50166 14.5288 7.79264C14.5867 8.08361 14.7296 8.35088 14.9393 8.56066C15.1491 8.77044 15.4164 8.9133 15.7074 8.97118C15.9983 9.02906 16.2999 8.99935 16.574 8.88582C16.8481 8.77229 17.0824 8.58003 17.2472 8.33336C17.412 8.08668 17.5 7.79667 17.5 7.5C17.5 7.10218 17.342 6.72065 17.0607 6.43934C16.7794 6.15804 16.3978 6 16 6ZM24.5 9C24.7967 9 25.0867 8.91203 25.3334 8.74721C25.58 8.58238 25.7723 8.34811 25.8858 8.07403C25.9993 7.79994 26.0291 7.49834 25.9712 7.20737C25.9133 6.91639 25.7704 6.64912 25.5607 6.43934C25.3509 6.22956 25.0836 6.0867 24.7926 6.02882C24.5017 5.97094 24.2001 6.00065 23.926 6.11418C23.6519 6.22771 23.4176 6.41997 23.2528 6.66665C23.088 6.91332 23 7.20333 23 7.5C23 7.89783 23.158 8.27936 23.4393 8.56066C23.7206 8.84197 24.1022 9 24.5 9ZM7.5 14.5C7.20333 14.5 6.91332 14.588 6.66665 14.7528C6.41997 14.9176 6.22771 15.1519 6.11418 15.426C6.00065 15.7001 5.97094 16.0017 6.02882 16.2926C6.0867 16.5836 6.22956 16.8509 6.43934 17.0607C6.64912 17.2704 6.91639 17.4133 7.20737 17.4712C7.49834 17.5291 7.79994 17.4994 8.07403 17.3858C8.34811 17.2723 8.58238 17.08 8.74721 16.8334C8.91203 16.5867 9 16.2967 9 16C9 15.6022 8.84197 15.2206 8.56066 14.9393C8.27936 14.658 7.89783 14.5 7.5 14.5ZM16 14.5C15.7033 14.5 15.4133 14.588 15.1666 14.7528C14.92 14.9176 14.7277 15.1519 14.6142 15.426C14.5007 15.7001 14.4709 16.0017 14.5288 16.2926C14.5867 16.5836 14.7296 16.8509 14.9393 17.0607C15.1491 17.2704 15.4164 17.4133 15.7074 17.4712C15.9983 17.5291 16.2999 17.4994 16.574 17.3858C16.8481 17.2723 17.0824 17.08 17.2472 16.8334C17.412 16.5867 17.5 16.2967 17.5 16C17.5 15.6022 17.342 15.2206 17.0607 14.9393C16.7794 14.658 16.3978 14.5 16 14.5ZM24.5 14.5C24.2033 14.5 23.9133 14.588 23.6666 14.7528C23.42 14.9176 23.2277 15.1519 23.1142 15.426C23.0007 15.7001 22.9709 16.0017 23.0288 16.2926C23.0867 16.5836 23.2296 16.8509 23.4393 17.0607C23.6491 17.2704 23.9164 17.4133 24.2074 17.4712C24.4983 17.5291 24.7999 17.4994 25.074 17.3858C25.3481 17.2723 25.5824 17.08 25.7472 16.8334C25.912 16.5867 26 16.2967 26 16C26 15.6022 25.842 15.2206 25.5607 14.9393C25.2794 14.658 24.8978 14.5 24.5 14.5ZM7.5 23C7.20333 23 6.91332 23.088 6.66665 23.2528C6.41997 23.4176 6.22771 23.6519 6.11418 23.926C6.00065 24.2001 5.97094 24.5017 6.02882 24.7926C6.0867 25.0836 6.22956 25.3509 6.43934 25.5607C6.64912 25.7704 6.91639 25.9133 7.20737 25.9712C7.49834 26.0291 7.79994 25.9993 8.07403 25.8858C8.34811 25.7723 8.58238 25.58 8.74721 25.3334C8.91203 25.0867 9 24.7967 9 24.5C9 24.1022 8.84197 23.7206 8.56066 23.4393C8.27936 23.158 7.89783 23 7.5 23ZM16 23C15.7033 23 15.4133 23.088 15.1666 23.2528C14.92 23.4176 14.7277 23.6519 14.6142 23.926C14.5007 24.2001 14.4709 24.5017 14.5288 24.7926C14.5867 25.0836 14.7296 25.3509 14.9393 25.5607C15.1491 25.7704 15.4164 25.9133 15.7074 25.9712C15.9983 26.0291 16.2999 25.9993 16.574 25.8858C16.8481 25.7723 17.0824 25.58 17.2472 25.3334C17.412 25.0867 17.5 24.7967 17.5 24.5C17.5 24.1022 17.342 23.7206 17.0607 23.4393C16.7794 23.158 16.3978 23 16 23ZM24.5 23C24.2033 23 23.9133 23.088 23.6666 23.2528C23.42 23.4176 23.2277 23.6519 23.1142 23.926C23.0007 24.2001 22.9709 24.5017 23.0288 24.7926C23.0867 25.0836 23.2296 25.3509 23.4393 25.5607C23.6491 25.7704 23.9164 25.9133 24.2074 25.9712C24.4983 26.0291 24.7999 25.9993 25.074 25.8858C25.3481 25.7723 25.5824 25.58 25.7472 25.3334C25.912 25.0867 26 24.7967 26 24.5C26 24.1022 25.842 23.7206 25.5607 23.4393C25.2794 23.158 24.8978 23 24.5 23Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DotsNineIcon;

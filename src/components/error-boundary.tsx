/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React from "react";
import { ErrorBoundary as EB, type FallbackProps } from "react-error-boundary";

const Fallback: React.ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <EB FallbackComponent={Fallback}>{children}</EB>;
}

export default ErrorBoundary;

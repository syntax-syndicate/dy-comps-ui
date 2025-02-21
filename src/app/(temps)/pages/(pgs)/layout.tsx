import CleanPage from "../../_component/clean-page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <CleanPage />
      {children}
    </>
  );
}

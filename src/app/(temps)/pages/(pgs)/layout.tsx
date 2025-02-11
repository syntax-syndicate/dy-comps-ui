import { SideMenu } from "@/components/side-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideMenu />
      <style global>
        {`
	  #dy-footer,
	  #dy-navbar {
		display: none !important;
	  }
	`}
      </style>
      {children}
    </>
  );
}

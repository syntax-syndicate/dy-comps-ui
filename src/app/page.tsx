import { Grid } from "@/components/grid-svg";
import HeaderView from "@/components/home/header-view";
import { MultilayerCard } from "@/components/home/home-compos";

export default async function Page() {
  return (
    <main className="relative flex-1 p-6 !pt-24 md:p-10 lg:p-16">
      <HeaderView />
      <MultilayerCard className="mx-auto my-5 max-w-4xl justify-self-center text-center text-3xl font-bold md:text-5xl">
        <Grid className="border-t-transparent" size={50} />
        As simple as copy and paste
      </MultilayerCard>
    </main>
  );
}

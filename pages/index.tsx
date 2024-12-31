import MainComponent from "@/components/MainComponent";
import Navbar from "@/components/Navbar";
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Samiksha</title>
        <meta name="description" content="Samiksha - Portfolio website"></meta>
        <meta name="viewport" content="width=device-width; initial-scale=1"></meta>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor bg-no-repeat bg-center text-textDark overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-hoverColor/20 scrollbar-thumb-textDarker/60">
        <Navbar />
        <MainComponent/>
      </main>
    </>
  );
}

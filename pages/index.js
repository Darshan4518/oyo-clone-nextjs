import Footer from "@/components/footer/footer";
import Header1 from "@/components/header1/header1";
import Header2 from "@/components/header2/header2";
import Header3 from "@/components/header3/header3";
import Header4 from "@/components/header4/header4";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          OYO : India`s Best Online Hotel Booking Site For Sanitized Stay.
        </title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Footer />
    </main>
  );
}

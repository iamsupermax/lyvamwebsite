import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:primary-color"
              src="/Lyvam.svg"
              alt="Lyvam logomark"
             width={1024}
            height={1024}
          />
	<div className="flex column">
		<a className="flex row space-around gap-2 hover:underline hover:underline-offset-4 --font-climate-crisis"
                  target="_blank"
                  rel="noopener noreferrer">
		  GAME</a>
		<a className="flex row space-around gap-2 hover:underline hover:underline-offset-4 --font-climate-crisis"
                  target="_blank"
                  rel="noopener noreferrer">
		  PROJECT</a>
		<a className="flex row space-around gap-2 hover:underline hover:underline-offset-4 --font-climate-crisis"
                  target="_blank"
                  rel="noopener noreferrer">
		  GITHUB</a>
	</div>
	<div className="flex column">
                <a className="flex row space-around gap-2 hover:underline hover:underline-offset-4 --font-climate-crisis"
                  target="_blank"
                  rel="noopener noreferrer">
		  STUDIO</a>
		<a className="flex row space-around gap-2 hover:underline hover:underline-offset-4 --font-climate-crisis"
                  target="_blank"
                  rel="noopener noreferrer">
		  HISTORY</a>
                <a className="flex row space-around gap-2 hover:underline hover:underline-offset-4 --font-climate-crisis"
                  target="_blank"
                  rel="noopener noreferrer">
		  REPORT</a>
	</div>
	<div className="flex column">
		<a 
		  className="flex row space-around gap-2 hover:underline hover:underline-offset-4 "
          	  target="_blank"
          	  rel="noopener noreferrer">
		  DOWNLOAD
		</a>
	</div> 
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer" >
          A1 SUPREMACY
        </a>
      </footer>
    </div>
  );
}

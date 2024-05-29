export default function Nav() {
    return(
        <nav onTouchStart={()=>window.open("/", "_self")} className="font-bold font-mono bg-red-200 shadow-md p-3 border-b-2 border-b-black text-2xl">
            <p className="inline-block transform-origin animate-pulse text-3xl">Q</p>uizzer
        </nav>
    );
}

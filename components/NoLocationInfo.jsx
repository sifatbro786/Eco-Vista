import Link from "next/link";
import Card from "./Card";

export default function NoLocationInfo({ location }) {
    return (
        <Card>
            <div className="flex flex-col justify-center items-center">
                <p className="text-white font-semibold text-xl text-center mb-8">
                    No Location Info Available for &quot;{location}&quot;
                </p>
                <Link href={"/"} className="bg-blue-400 text-slate-700 py-2 px-4 rounded-lg text-center">
                    Go back
                </Link>
            </div>
        </Card>
    );
}

import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function HomePage() {
    return (
        <Suspense>
            <LocationDetector />
        </Suspense>
    );
}

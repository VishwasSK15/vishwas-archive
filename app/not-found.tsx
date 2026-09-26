import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArchiveLogo } from "@/components/layout/ArchiveLogo";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-md mx-auto">
        <ArchiveLogo size="lg" />
        <div className="space-y-2">
          <div className="text-xs font-mono-meta text-blue-700 dark:text-blue-400 font-bold tracking-widest">
            ERROR 404 // UNCATALOGED RECORD
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
            Record Not Found
          </h1>
          <p className="font-editorial text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            The requested archival path does not exist in the collection or has been relocated to another sector.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-mono-meta text-xs tracking-wider font-bold hover:opacity-90 transition-opacity shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO ARCHIVE INDEX</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

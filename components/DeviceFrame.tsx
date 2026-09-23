import Image from "next/image";

type Props = {
  desktop: string;
  mobile: string;
  alt: string;
  url?: string;
  priority?: boolean;
};

/** A browser window with the phone view overlapping its corner, so both layouts read in one glance. */
export function DeviceFrame({ desktop, mobile, alt, url, priority }: Props) {
  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : undefined;
  return (
    <div className="relative pb-6 pe-6 sm:pb-10 sm:pe-10">
      <div className="overflow-hidden rounded-xl border border-rule bg-paper shadow-[0_1px_0_var(--rule),0_24px_48px_-28px_rgb(0_0_0/0.35)]">
        <div className="flex items-center gap-2 border-b border-rule px-3 py-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-rule" />
            <span className="size-2.5 rounded-full bg-rule" />
            <span className="size-2.5 rounded-full bg-rule" />
          </span>
          {host && (
            <span className="ms-2 truncate rounded-md bg-mist px-2 py-0.5 font-mono text-[0.7rem] text-muted">
              {host}
            </span>
          )}
        </div>
        <Image
          src={desktop}
          alt={`${alt}, desktop`}
          width={1440}
          height={900}
          priority={priority}
          sizes="(min-width: 1200px) 44rem, (min-width: 768px) 60vw, 92vw"
          className="block aspect-[16/10] w-full object-cover object-top"
        />
      </div>
      <div className="absolute bottom-0 end-0 w-[26%] min-w-[5.5rem] max-w-[10rem] overflow-hidden rounded-[1.1rem] border-[5px] border-ink bg-ink shadow-[0_24px_40px_-20px_rgb(0_0_0/0.5)]">
        <Image
          src={mobile}
          alt={`${alt}, mobile`}
          width={390}
          height={844}
          sizes="10rem"
          className="block aspect-[390/844] w-full rounded-[0.75rem] object-cover object-top"
        />
      </div>
    </div>
  );
}

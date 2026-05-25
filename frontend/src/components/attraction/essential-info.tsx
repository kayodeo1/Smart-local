import type { OpeningHour } from "@/lib/types";

interface Props {
  entryFee?: string;
  feeSubtext?: string;
  hours?: OpeningHour[];
  accessibility?: string;
}

export default function EssentialInfo({ entryFee, feeSubtext, hours, accessibility }: Props) {
  if (!entryFee && !hours?.length && !accessibility) return null;

  return (
    <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 shadow-sm flex flex-col gap-6 border border-white/50">
      <h3 className="font-headline-md text-headline-md text-primary border-b border-outline-variant/30 pb-4">
        Essential Info
      </h3>
      <ul className="space-y-4">
        {entryFee && (
          <li className="flex items-start gap-4">
            <div className="p-2 bg-surface rounded-full text-on-surface-variant shadow-sm">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-primary">Entry Fee</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {entryFee}
                {feeSubtext && (
                  <>
                    <br />
                    <span className="text-sm opacity-70">{feeSubtext}</span>
                  </>
                )}
              </p>
            </div>
          </li>
        )}

        {hours && hours.length > 0 && (
          <li className="flex items-start gap-4">
            <div className="p-2 bg-surface rounded-full text-on-surface-variant shadow-sm">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-primary">Hours</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {hours.map((line, i) => (
                  <span key={i}>
                    {typeof line === "string" ? line : `${line.day}: ${line.time}`}
                    {i < hours.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </li>
        )}

        {accessibility && (
          <li className="flex items-start gap-4">
            <div className="p-2 bg-surface rounded-full text-on-surface-variant shadow-sm">
              <span className="material-symbols-outlined">accessible</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-primary">Accessibility</p>
              <p className="font-body-md text-body-md text-on-surface-variant">{accessibility}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

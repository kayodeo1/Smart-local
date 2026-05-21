import { EssentialInfo as EssentialInfoType } from "@/lib/mock-data";

export default function EssentialInfo({ info }: { info?: EssentialInfoType }) {
  if (!info) return null;

  return (
    <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 shadow-sm flex flex-col gap-6 border border-white/50">
      <h3 className="font-headline-md text-headline-md text-primary border-b border-outline-variant/30 pb-4">
        Essential Info
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-4">
          <div className="p-2 bg-surface rounded-full text-on-surface-variant shadow-sm">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-primary">Entry Fee</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {info.entryFee}
              {info.feeSubtext && (
                <>
                  <br />
                  <span className="text-sm opacity-70">{info.feeSubtext}</span>
                </>
              )}
            </p>
          </div>
        </li>
        
        <li className="flex items-start gap-4">
          <div className="p-2 bg-surface rounded-full text-on-surface-variant shadow-sm">
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-primary">Hours</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {info.hours.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < info.hours.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </li>
        
        <li className="flex items-start gap-4">
          <div className="p-2 bg-surface rounded-full text-on-surface-variant shadow-sm">
            <span className="material-symbols-outlined">accessible</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-primary">Accessibility</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {info.accessibility}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

import Image from "next/image";

export default function DoctorCard({
  name,
  specialty,
  experience,
  imageSrc,
}: {
  name: string;
  specialty: string;
  experience?: string;
  imageSrc?: string;
}) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 flex gap-4 items-center bg-white/60 dark:bg-black/40">
      <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        {imageSrc ? (
          <Image src={imageSrc} alt={`${name} photo`} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">No image</div>
        )}
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-foreground/70">{specialty}</p>
        {experience && <p className="text-xs text-foreground/60 mt-1">{experience}</p>}
      </div>
    </div>
  );
}

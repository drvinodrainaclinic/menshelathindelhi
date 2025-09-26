import DoctorCard from "@/components/DoctorCard";
import Image from "next/image";

export const metadata = {
  title: "Doctors | Dr. Vinod Raina Clinic",
  description: "Meet our experienced doctors specializing in HIV treatment and sexual health.",
};

export default function DoctorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Our Doctors</h1>
      <p className="text-foreground/80 mb-8 max-w-3xl">
        Our medical team brings decades of experience in infectious diseases, HIV care, and
        sexual medicine. Profiles shown here are placeholders — replace with verified details.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <DoctorCard
          name="Dr. Vinod Raina"
          specialty="HIV Treatment & Sexual Health"
          experience="30+ years of clinical experience"
          imageSrc="/images/doctor1.svg"
        />
        <DoctorCard
          name="Dr. A. Specialist"
          specialty="Infectious Diseases"
          experience="15+ years"
          imageSrc="/images/doctor2.svg"
        />
      </div>
    </div>
  );
}

import { Hero } from "@/components/home/Hero";
import { PatientApproach } from "@/components/home/PatientApproach";
import { DoctorPreview } from "@/components/home/DoctorPreview";
import { TreatmentsPreview } from "@/components/home/TreatmentsPreview";
import { ClinicPreview } from "@/components/home/ClinicPreview";
import { PatientStories } from "@/components/home/PatientStories";
import { CaseResults } from "@/components/home/CaseResults";
import { FirstVisit } from "@/components/home/FirstVisit";
import { FAQPreview } from "@/components/home/FAQPreview";
import { LocationPreview } from "@/components/home/LocationPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>

      <main>
        <Hero />

        <DoctorPreview />

        <PatientApproach />

        <TreatmentsPreview />

        <PatientStories />

        <ClinicPreview />

        <CaseResults />

        <FirstVisit />

        <FAQPreview />

        <LocationPreview />

        <FinalCTA />
      </main>
    </>
  );
} 
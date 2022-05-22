import useBrands from "../hooks/useBrands";
import PhonesSection from "../phonesSection/PhonesSection";

export default function BrandsSection() {
  const phones = useBrands();
  return <PhonesSection phones={phones} />;
}

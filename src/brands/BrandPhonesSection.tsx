import { useParams } from "react-router-dom";
import useBrandPhones from "../hooks/useBrandPhones";
import PhonesSection from "../phonesSection/PhonesSection";
export default function BrandPhonesSection() {
  const { brand } = useParams();
  const phones = useBrandPhones(brand!);
  return <PhonesSection phones={phones} />;
}

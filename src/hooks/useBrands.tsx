import { useEffect, useState } from "react";
import { IPhone } from "../phone/PhoneComponent";
import { useNavigate } from "react-router-dom";

interface IRawBrand {
  id: string;
  displayName: string;
  displayImageUrl: string;
}

export default function () {
  const [brands, setBrands] = useState<IPhone[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TGSL-DC/frontend-interview-api/master/brands.json"
    )
      .then((res) => {
        return res.json();
      })
      .then(
        (result) =>
          result?.options && setBrands(result.options.map(formatPhone))
      )
      .catch(() => {
        navigate("/error");
      });
  }, []);

  return brands;
}

function formatPhone(brand: IRawBrand): IPhone {
  const { id, displayImageUrl, displayName } = brand;

  return { id, displayImageUrl, displayName, link: `/phones/${displayName}` };
}

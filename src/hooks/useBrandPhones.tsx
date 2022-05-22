import { useEffect, useMemo, useState } from "react";
import { IPhone } from "../phone/PhoneComponent";
import { useNavigate } from "react-router-dom";

export interface IRawPhone {
  brand: string;
  displayName: string;
  contentKey: string;
  price: string;
  pricePrefix: string;
  priceSuffix: string;
  internalMemoryGB: number[];
  dualSIM: string;
  screenSize: string;
  networkTechnology: string[];
  imgUrl: string;
  link: string;
}

export default function useBrandPhones(brand: string) {
  const allPhones = usePhone();
  return allPhones[brand] || [];
}

function usePhone(): Record<string, IPhone[]> {
  const [brandToPhonesMap, setBrandToPhonesMap] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TGSL-DC/frontend-interview-api/master/phones.json"
    )
      .then((res) => res.json())
      .then(
        (result) =>
          result?.length && setBrandToPhonesMap(formatBrandToPhonesMap(result))
      )
      .catch(() => {
        navigate("/error");
      });
  }, []);

  return brandToPhonesMap;
}

function formatBrandToPhonesMap(phones: IRawPhone[]) {
  return phones.reduce((accum: Record<string, IPhone[]>, phone) => {
    if (!accum[phone.brand]) {
      accum[phone.brand] = [];
    }
    accum[phone.brand].push(formatPhone(phone));
    return accum;
  }, {});
}

function formatPhone(rawPhone: IRawPhone): IPhone {
  const { contentKey, displayName, imgUrl, link } = rawPhone;
  return { id: contentKey, displayImageUrl: imgUrl, link, displayName };
}

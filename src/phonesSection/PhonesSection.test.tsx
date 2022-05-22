import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import PhonesSection from "./PhonesSection";
import { IPhone } from "../phone/PhoneComponent";

describe("PhonesSection", () => {
  const mockedPhones: IPhone[] = [
    {
      id: "apple-iphone-7",
      displayImageUrl:
        "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone7_Black_Front_270x540.png",
      displayName: "Apple iPhone 7",
      link: "https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-7",
    },
    {
      id: "apple-iphone-8",
      displayImageUrl:
        "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone7_Black_Front_270x540.png",
      displayName: "Apple iPhone 8",
      link: "https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-7",
    },
    {
      id: "apple-iphone-9",
      displayImageUrl:
        "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone7_Black_Front_270x540.png",
      displayName: "Apple iPhone 9",
      link: "https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-7",
    },
  ];
  it("Render correct PhonesSection", () => {
    const eventHandler = jest.fn();
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <PhonesSection phones={mockedPhones} />
      </Router>
    );
    mockedPhones.forEach((mockedPhone) => {
      expect(screen.getByText(mockedPhone.displayName)).toBeInTheDocument();
    });
  });
});

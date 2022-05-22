import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import useBrandPhones from "./useBrandPhones";

function DummyComponent() {
  const brandPhones = useBrandPhones("Apple");
  return (
    <>
      {brandPhones?.map((brandPhone) => (
        <div key={brandPhone.id}>
          <span>{brandPhone.displayName}</span>
          <span>{brandPhone.id}</span>
        </div>
      ))}
    </>
  );
}
describe("useBrandPhones", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              brand: "Apple",
              displayName: "Apple iPhone 7",
              contentKey: "apple-iphone-7",
              price: "449.0",
              pricePrefix: "Pris",
              priceSuffix: "kr/mån",
              internalMemoryGB: [32, 128, 256],
              dualSIM: "",
              screenSize: "",
              networkTechnology: ["2g", "3g", "4g"],
              colorOptions: [
                {
                  name: "Rymdgrå",
                  hex: "#44464a",
                },
              ],
              imgUrl:
                "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone7_Black_Front_270x540.png",
              link: "https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-7",
            },
            {
              brand: "Apple",
              displayName: "Apple iPhone 8",
              contentKey: "apple-iphone-8",
              price: "529.0",
              pricePrefix: "Pris",
              priceSuffix: "kr/mån",
              internalMemoryGB: [32, 64, 128, 256],
              dualSIM: "",
              screenSize: "",
              networkTechnology: ["2g", "3g", "4g"],
              colorOptions: [
                {
                  name: "Rymdgrå",
                  hex: "#444446",
                },
                {
                  name: "Guld",
                  hex: "#f8e9df",
                },
              ],
              imgUrl:
                "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone8_spacegrey_front_270x540.png",
              link: "https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-8",
            },
          ]),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("Render correct useBrandPhones", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        (<DummyComponent />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText("Apple iPhone 7")).toBeInTheDocument();
      expect(screen.getByText("Apple iPhone 8")).toBeInTheDocument();
      expect(screen.getByText("apple-iphone-7")).toBeInTheDocument();
      expect(screen.getByText("apple-iphone-8")).toBeInTheDocument();
    });
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import useBrands from "./useBrands";

function DummyComponent() {
  const brandPhones = useBrands();
  return (
    <>
      {brandPhones?.map((brandPhone) => (
        <div key={brandPhone.id}>
          <span>{brandPhone.displayName}</span>
        </div>
      ))}
    </>
  );
}
describe("useBrands", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            options: [
              {
                id: "Alcatel",
                displayName: "Alcatel",
                displayImageUrl:
                  "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/alcatel_front_270x540.png",
              },
              {
                id: "Apple",
                displayName: "Apple",
                displayImageUrl:
                  "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/iPhone_11_Pro_Max_Green_Front_270x540.png",
              },
            ],
          }),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("Render correct useBrands", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        (<DummyComponent />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Alcatel")).toBeInTheDocument();
    });
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { useEffect } from "react";
import { Router } from "react-router-dom";
import useBrands from "./useBrands";
import useRemovedPhonesState from "./useRemovedPhones";

function DummyComponent() {
  const { removePhone, removedPhoneIds } = useRemovedPhonesState();
  useEffect(() => {
    removePhone("testId");
  }, []);
  return (
    <>
      {removedPhoneIds?.map((id) => (
        <div key={id}>
          <span>{id}</span>
        </div>
      ))}
    </>
  );
}
describe("useRemovedPhonesState", () => {
  it("Render correct useRemovedPhonesState", async () => {
    render(<DummyComponent />);
    await waitFor(() => {
      expect(screen.getByText("testId")).toBeInTheDocument();
    });
  });
});

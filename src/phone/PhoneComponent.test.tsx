import { render, screen } from "@testing-library/react";
import PhoneComponent, { IPhone } from "./PhoneComponent";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("PhoneComponent", () => {
  const mockedPhone: IPhone = {
    id: "apple-iphone-7",
    displayImageUrl:
      "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone7_Black_Front_270x540.png",
    displayName: "Apple iPhone 7",
    link: "https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-7",
  };
  it("Render correct PhoneComponent", () => {
    const eventHandler = jest.fn();
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <PhoneComponent
          phone={mockedPhone}
          isMarked
          onHeartIconClick={eventHandler}
          onDeleteIconClick={eventHandler}
        />
      </Router>
    );
    expect(screen.getByText(mockedPhone.displayName)).toBeInTheDocument();
    expect(screen.getByAltText(mockedPhone.displayName)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    expect(eventHandler).toBeCalledWith(mockedPhone.id);
  });
});

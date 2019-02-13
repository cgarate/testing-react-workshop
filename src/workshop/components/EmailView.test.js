import React from "react";
import { mount } from "enzyme";
import EmailView from "./EmailView";
import { DEFAULT_EMAIL, READ_EMAIL } from "../../__fixtures__";

describe("Tests render logic", () => {
  describe("email", () => {
    it('displays "mark read" button if email is unread', () => {
      const component = mount(<EmailView email={DEFAULT_EMAIL} />);
      const markReadButton = component.find(
        '[data-test="email-mark-read-button"]',
      );
      expect(markReadButton).toExist();
    });

    it("displays mark unread button if email is read", () => {
      const component = mount(<EmailView email={READ_EMAIL} />);
      const markUnreadButton = component.find(
        '[data-test="email-mark-unread-button"]',
      );
      expect(markUnreadButton).toExist();
    });

    it("Does not encode HTML in the message", () => {
      const component = mount(<EmailView email={DEFAULT_EMAIL} />);
      const message = component.find('[data-test="email-message"]');
      expect(message.html()).toContain("<br>");
    });
  });
});

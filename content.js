$(document).ready(function () {
  console.log("Document loaded");
  function delayAutoFillForm(elementId, fieldValue, btnId) {
    setTimeout(() => {
      var elementField = document.querySelector(elementId);
      if (elementField) {
        elementField.value = fieldValue;
        elementField.dispatchEvent(new Event("input", { bubbles: true }));
        if (btnId) {
          delayAutoClickButton(btnId);
        }
      }
    }, 3000);
  }
  function delayAutoClickButton(elementId) {
    setTimeout(() => {
      var elementField = document.querySelector(elementId);
      if (elementField) {
        console.log(elementField);
        elementField.dispatchEvent(new Event("click", { bubbles: true }));
      }
    }, 3000);
  }
  delayAutoFillForm(
    "input#account_name_text_field",
    "John Doe",
    "button#sign-in"
  );
  delayAutoClickButton("#remember-me");
  delayAutoFillForm("input#password_text_field", "password", "button#sign-in");
  delayAutoClickButton("button#sign-in");
  function delayAutoFillUserPassword() {
    setTimeout(() => {
      var elementField = document.querySelector(
        "input#account_name_text_field"
      );
      if (elementField) {
        elementField.value = "John Doe";
        elementField.dispatchEvent(new Event("input", { bubbles: true }));
        var elementBtn = document.querySelector(".shared-icon.icon_sign_in");
        if (elementBtn) {
          elementBtn.dispatchEvent(new Event("click", { bubbles: true }));
          elementField = document.querySelector("input#password_text_field");
          if (elementField) {
            elementField.value = "password";
            elementField.dispatchEvent(new Event("input", { bubbles: true }));
            $(document).ready(function () {
              elementBtn = document.querySelector("#sign-in");
              console.log(elementBtn);
              if (elementBtn) {
                elementBtn.dispatchEvent(new Event("click", { bubbles: true }));
              }
            });
          }
        }
      }
    }, 3000);
  }
  // delayAutoFillUserPassword();
});

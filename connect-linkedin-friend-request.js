(async () => {
  const items = [
    ...document.querySelector(".reusable-search__entity-result-list").children,
  ].filter((x) =>
    x.querySelectorAll(".artdeco-button")[0].textContent.includes("Connect")
  );

  const connect = (item) =>
    new Promise(async (resolve) => {
      const button = item.querySelectorAll(".artdeco-button")[0];
      if (button.textContent.includes("Connect")) {
        button.click();
        await new Promise((resolve) => setTimeout(resolve, 200));

        const modal = document.querySelector(".artdeco-modal");
        if (modal) {
          const buttonSize = modal.querySelectorAll("Button").length;
          if (buttonSize === 3) {
            modal.querySelectorAll("Button")[2].click();
          } else {
            modal.querySelectorAll("Button")[4].click();
            await new Promise((resolve) => setTimeout(resolve, 200));
            modal.querySelectorAll("Button")[6].click();
            await new Promise((resolve) => setTimeout(resolve, 200)); // abstração
            const modalTwo = document.querySelector(".artdeco-modal");
            if (modalTwo) {
              modalTwo.querySelectorAll("Button")[2].click();
            } // abstração
          }
          setTimeout(resolve, 300);
        }
      }
    });

  for await (user of items) {
    await connect(user);
  }
})();

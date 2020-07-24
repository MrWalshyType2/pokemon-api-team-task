(() => {
  let abilitiesBtn = document.querySelector("#abilities");
  let characteristicsBtn = document.querySelector("#characteristics");
  let berriesBtn = document.querySelector("#berries");
  let typeBtn = document.querySelector("#types");
  let cardContainer = document.querySelector("#cardContainer");

  abilityCardCreator = (data, i) => {
    let card = document.createElement("div");
    let cardBody = document.createElement("div");

    card.classList = "card my-3";
    cardBody.classList = "card-body";

    if (i >= 0) {
    } else {
    }

    card.appendChild(cardBody);
    return card;
  };

  characteristicCardCreator = (data, i) => {
    let card = document.createElement("div");
    let cardBody = document.createElement("div");

    card.classList = "card my-3";
    cardBody.classList = "card-body";

    if (i >= 0) {
    } else {
    }

    card.appendChild(cardBody);
    return card;
  };

  berriesCardCreator = (data, i) => {
    let card = document.createElement("div");
    let cardBody = document.createElement("div");

    card.classList = "card my-3";
    cardBody.classList = "card-body";

    if (i >= 0) {
    } else {
    }

    card.appendChild(cardBody);
    return card;
  };

  typeCardCreator = (data, i) => {
      let card = document.createElement("div");
      let cardBody = document.createElement("div");

      card.classList = "card my-3";
      cardBody.classList = "card-body";

      if (i >= 0) {
      } else {
      }

      card.appendChild(cardBody);
      return card;
  }

  emptyCardContainer = () => {
      cardContainer.innerHTML = "";
  };

  abilitiesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    emptyCardContainer();

    fetch()
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject({
                status: response.status,
                statusText: response.statusText
            });
        }
    })
    .then((data) => {
        // Change 100 to the num of items in data
        for (let i = 0; i < 100; i++) {
            let card = abilityCardCreator(data, i);
            cardContainer.appendChild(card);
        }
    })
    .catch((error) => {
        console.log(`Error: ${error.status}, ${error.statusText}`);
    });
  });
  //#chynna
  characteristicsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    emptyCardContainer();

    fetch('https://pokeapi.co/api/v2/characteristic/ $i++)'
    .then((response) => {
        if (response.ok) {
            return response.json('https://pokeapi.co/api/v2/characteristic');
        } else {
            return Promise.reject({
                status: response.status,
                statusText: response.statusText
            });
        }
    })
    .then((data) => {
        // Change 100 to the num of items in data
        for (let i = 0; i < 30 i++) {
            let card = characteristicsCardCreator(data, i);
            cardContainer.appendChild(card);
        }
    })
    .catch((error) => {
        console.log(`Error: ${error.status}, ${error.statusText}`);
    });
  });

  berriesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    emptyCardContainer();

    fetch()
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject({
                status: response.status,
                statusText: response.statusText
            });
        }
    })
    .then((data) => {
        // Change 100 to the num of items in data
        for (let i = 0; i < 100; i++) {
            let card = berriesCardCreator(data, i);
            cardContainer.appendChild(card);
        }
    })
    .catch((error) => {
        console.log(`Error: ${error.status}, ${error.statusText}`);
    });
  });

  typeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    emptyCardContainer();

    fetch()
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject({
                status: response.status,
                statusText: response.statusText
            });
        }
    })
    .then((data) => {
        // Change 100 to the num of items in data
        for (let i = 0; i < 100; i++) {
            let card = typeCardCreator(data, i);
            cardContainer.appendChild(card);
        }
    })
    .catch((error) => {
        console.log(`Error: ${error.status}, ${error.statusText}`);
    });
  });
})(window);

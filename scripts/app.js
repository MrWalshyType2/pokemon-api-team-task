(() => {
  let abilitiesBtn = document.querySelector("#abilities");
  let characteristicsBtn = document.querySelector("#characteristics");
  let berriesBtn = document.querySelector("#berries");
  let typeBtn = document.querySelector("#types");
  let cardContainer = document.querySelector("#cardContainer");

  abilityCardCreator = (data, i) => {
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let name = document.createElement("h4");
    let effectEntry = document.createElement("p");
    let genTitle = document.createElement("h5");
    let generation = document.createElement("p");

    genTitle.innerText = "Generation";

    fetch(`https://pokeapi.co/api/v2/ability/${i+1}`)
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
    .then((innerData) => {
        effectEntry.innerText = `${innerData.effect_entries[1].effect}`;
        generation.innerText = `${innerData.generation.name}`;
        console.log(innerData);
    })
    .catch((error) => {
        console.log(`Error: ${error.status}, ${error.statusText}`);
    });

    card.classList = "card my-3";
    cardBody.classList = "card-body";

    if (i >= 0) {
        name.innerText = `Ability: ${data.results[i].name}`;
    } else {
    }
    // console.log(data.results[i]);
    cardBody.appendChild(name);
    cardBody.appendChild(effectEntry);
    cardBody.appendChild(genTitle);
    cardBody.appendChild(generation);
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

    fetch("https://pokeapi.co/api/v2/ability/")
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
        let pageDataCount = data.count;
        
        for (let i = 0; i < pageDataCount; i++) {
            let card = abilityCardCreator(data, i);
            cardContainer.appendChild(card);
        }
    })
    .catch((error) => {
        console.log(`Error: ${error.status}, ${error.statusText}`);
    });
  });

  characteristicsBtn.addEventListener("click", (event) => {
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

let autoComplete;

export const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

export function handleScriptLoad(
  updateQuery,
  updateCity,
  updateSuburb,
  updatePostalCode,
  autoCompleteRef
) {
  const options = {
    componentRestrictions: { country: ["au", "np"] },
  };
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    options
  );
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, updateCity, updateSuburb, updatePostalCode)
  );
}

async function handlePlaceSelect(
  updateQuery,
  updateCity,
  updateSuburb,
  updatePostalCode
) {
  const addressObject = autoComplete.getPlace();

  const componentForm = {
    street_number: "long_name",
    route: "long_name",
    locality: "long_name",
    administrative_area_level_2: "short_name",
    cities: "short_name",
    postal_code: "short_name",
  };

  const place = addressObject;
  const addressObj = {};
  if (place.geometry) {
    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        const val = place.address_components[i][componentForm[addressType]];
        addressObj[addressType] = val;
      }
    }
  } else {
    console.error("Something went wrong");
  }

  const query =
    (addressObj.street_number || "") + " " + (addressObj.route || "");
  updateQuery(query);
  updateCity(addressObj.administrative_area_level_2 || "");
  updateSuburb(addressObj.locality || "");
  updatePostalCode(addressObj.postal_code || "");
}

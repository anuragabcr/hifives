import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [api, setApi] = useState("Select API");
  const [result, setResult] = useState("");
  const placeholder = {
    Faker: "Search Guide",
    Earthquake: "Search Guide",
    Behindthename: "Search Guide",
    OpenWeatherMap: "Search Guide",
    "Rick & Morty": "charater ID btn 1 & 499",
    "Select API": "Select an API first",
  };

  const searchClicked = async () => {
    if (api == "Rick & Morty" && search != "") {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${search}`
      );
      setResult(await response.json());
    }
  };

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>HiFives</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Following Website is made under the assignment for HiFives.
        </figcaption>
      </figure>
      <div className="d-flex justify-content-center">
        <form class="row g-3">
          <div class="col-auto">
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {api}
              </button>
              <ul class="dropdown-menu" aria-labelledby="#dropdownMenuButton1">
                <li>
                  <div
                    class="dropdown-item"
                    onClick={(e) => setApi("Earthquake")}
                  >
                    Earthquake
                  </div>
                </li>
                <li>
                  <div class="dropdown-item" onClick={(e) => setApi("Faker")}>
                    Faker
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item"
                    onClick={(e) => setApi("Behindthename")}
                  >
                    Behindthename
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item"
                    onClick={(e) => setApi("OpenWeatherMap")}
                  >
                    OpenWeatherMap
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item"
                    onClick={(e) => setApi("Rick & Morty")}
                  >
                    Rick & Morty
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-auto">
            <label for="search" class="visually-hidden">
              Search
            </label>
            <input
              type="text"
              class="form-control"
              id="search"
              placeholder={placeholder[api]}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <button
              type="button"
              onClick={searchClicked}
              class="btn btn-success mb-3"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {result != "" ? (
        <div>
          {result.name}
          <br></br>
          {result.id}
          <br></br>
          {result.status}
          <br></br>
          {result.species}
        </div>
      ) : (
        ""
      )}
      <div className="d-flex justify-content-center"></div>
    </div>
  );
}

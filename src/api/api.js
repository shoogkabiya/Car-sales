const local = "http://localhost:4000";

//connect frontend with backend

//addCars
export const addCars = async (newcar) => {
  console.log("newcar:", newcar);
  try {
    const access_token = localStorage.getItem("access_token");
    const response = await fetch(`${local}/user/addCars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: access_token,
      },
      body: JSON.stringify({ newcar }),
    });
    console.log("responsedata:", response);
    const datacars = await response.json();
    console.log("datacars:", datacars);

    if (datacars) {
      return datacars;
      // console.log("datacars:", datacars);
    }
  } catch (error) {
    console.log(error);
  }
};

//getCars
export const getCars = async () => {
  try {
    const response = await fetch(`${local}/car/getCars`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const cars = await response.json();
    console.log("datacars:", cars);

    if (cars) {
      return cars;
      // console.log("datacars:", datacars);
    }
  } catch (error) {
    console.log(error);
  }
};

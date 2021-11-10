const local = "http://localhost:4000";

//connect frontend with backend
export const addCars = async (data) => {
  console.log("data:", data);
  try {
    const access_token = localStorage.getItem("access_token");
    const response = await fetch(`${local}/user/addCars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: access_token,
      },
      body: JSON.stringify({ data }),
    });
    console.log("response:", response.json());
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

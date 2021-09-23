const local = "http://loacalhost:4000";

//connect frontend with backend
export const addCars = async (data) => {
  try {
    const response = await fetch(`${local}/user/addCars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const datacars = await response.json();
    if (datacars) {
      console.log("datacars:", datacars);
    }
  } catch (error) {
    console.log(error);
  }
};

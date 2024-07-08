import axios from "axios";

export const GetCollectionsAsync = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found");
    }
    const response = await axios.get(
      "http://localhost:5062/CollectionActions/getAll",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(`On get collections: ${error}`);
    throw error;
  }
};

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

export const FetchCollectionsAsync = async () => {
  try {
    const response = await GetCollectionsAsync();
    if (response.status === 200) {
      const data = response.data;
      const collectionsArray = data["$values"].map((item: any) => ({
        collectionId: item.id,
        collectionName: item.collectionName,
      }));
      return collectionsArray;
    } else {
      console.error(`Failed to get collections. Status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error fetching collections: ${error}`);
  }
};

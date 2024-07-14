import axios from "axios";

interface CollectionProps {
  collectionName: string;
}

export const addCollectionAsync = async ({
  collectionName,
}: CollectionProps) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found");
    }
    const response = await axios.post(
      "http://localhost:5062/CollectionActions/add",
      { collectionName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return response;
    }
  } catch (error: any) {
    console.error("Error adding collection:", error.response.data);
  }
};

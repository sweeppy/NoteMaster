import axios from "axios";

export const getAllNotesAsync = async (collectionId: string) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found");
    }
    const response = await axios.post(
      "http://localhost:5062/NotesActions/getAll",
      {
        collectoinId: collectionId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(response);
      return response;
    }
  } catch (error: any) {
    console.error("Error getAllNotes", error.response.data);
  }
};

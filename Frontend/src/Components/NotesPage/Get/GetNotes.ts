import axios from "axios";

interface Props {
  collectionId: string;
}
export const getAllNotesAsync = async ({ collectionId }: Props) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found");
    }
    const response = await axios.post(
      "http://localhost:5062/NotesActions/getAll",
      {
        collectionId,
      },
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
    console.error("Error getAllNotes", error.response.data);
  }
};

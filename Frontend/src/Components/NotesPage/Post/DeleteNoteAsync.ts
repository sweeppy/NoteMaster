import axios from "axios";

export const deleteNoteAsync = async (noteId: string) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw Error("Token not found.");
    }
    const response = await axios.post(
      "http://localhost:5062/NotesActions/delete",
      {
        id: noteId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error: any) {
    console.error(error.response.data);
    return error.response;
  }
};

import axios from "axios";

export const UpdateNoteInfoAsync = async (
  noteId: string,
  noteTitle: string,
  noteDescription: string
) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw Error("Token not found");
    }
    const response = await axios.post(
      "http://localhost:5062/NotesActions/update",
      {
        id: noteId,
        title: noteTitle,
        description: noteDescription,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error: any) {
    console.log(error.response);
    return error.response;
  }
};

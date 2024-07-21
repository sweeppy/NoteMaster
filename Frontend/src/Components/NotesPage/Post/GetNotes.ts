import axios from "axios";

const getAllNotesAsync = async (collectionId: string) => {
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
      return response;
    }
  } catch (error: any) {
    console.error(`Error getAllNotes: ${error.response.data}`);
  }
};

export const fetchGetAllNotesAsync = async (collectionId: string) => {
  const response = await getAllNotesAsync(collectionId);
  const data = response?.data;

  const notesArray = data.map((note: any) => ({
    noteId: note.id,
    noteTitle: note.title,
    noteDescription: note.description,
    noteCollectionId: note.collectionId,
    updatedAt: note.updatedAt,
  }));
  return notesArray;
};

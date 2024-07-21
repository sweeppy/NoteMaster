import axios from "axios";
export interface CreateNoteRequest {
  title: string;
  collectionId: string;
}
const CreateNoteAsync = async ({ title, collectionId }: CreateNoteRequest) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw Error("Token not found");
    }
    const response = await axios.post(
      "http://localhost:5062/NotesActions/create",
      {
        title: title,
        collectionId: collectionId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const fetchCreateNoteAsync = async ({
  title,
  collectionId,
}: CreateNoteRequest) => {
  const data = await CreateNoteAsync({ title, collectionId });
  if (data != undefined) {
    return data;
  }
};

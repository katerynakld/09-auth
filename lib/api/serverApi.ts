import { cookies } from "next/headers";
import { nextServer } from "./api";
import { User } from "@/types/user";
import { Note } from "@/types/note";
import { FetchNotesParams, NotesResponse } from "./clientApi";

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await nextServer.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
};

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};

export default async function fetchNotesServer({
  page,
  perPage = 12,
  search,
  tag,
}: FetchNotesParams): Promise<NotesResponse> {
  const cookieStore = await cookies();

  const response = await nextServer.get<NotesResponse>("/notes", {
    params: {
      page,
      search,
      tag: tag || undefined,
      perPage,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response.data;
}

export async function fetchNoteByIdServer(id: string): Promise<Note> {
  const cookieStore = await cookies();

  const responseById = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return responseById.data;
}

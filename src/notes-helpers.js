export const findFolder = (folders = [], folderId) =>
	folders.find((folder) => folder.id === folderId);

export const findNote = (notes = [], noteId) =>
	notes.find((note) => note.id === noteId);

export const getNotesForFolder = (notes = [], folderId) =>
	notes.filter((e) => e.folder_name === parseInt(folderId));

export const countNotesForFolder = (notes = [], folderId) =>
	notes.filter((note) => note.folder_name === folderId).length;

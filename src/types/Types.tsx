import { UUID } from "crypto";

// Project types

export type Project = {
  id?: UUID;
  title: string;
  date: string;
  fullDescription: string;
  number: number;
  summary?: string;
  githubLink?: string;
  image?: File | null;
  creator?: User;
};

// User types

export type User = {
  id?: UUID;
  isAdmin?: boolean;
  name?: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  resume?: string;
  summary?: string;
};

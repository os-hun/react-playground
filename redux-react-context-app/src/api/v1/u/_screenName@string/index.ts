export type User = {
  name: string,
  screen_name: string,
  bio : string | null,
  avatar_url : string | null,
}

export type Methods = {
  get: {
    resBody: User;
  }
}

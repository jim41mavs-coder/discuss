"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session?.user) {
    return <p>From Client: Not signed in</p>;
  }

  return (
    <div>
      <div>From Client: </div>
      <p>Signed in as {session.user.email}</p>
      <p>User ID: {session.user.id}</p>
    </div>
  );
}

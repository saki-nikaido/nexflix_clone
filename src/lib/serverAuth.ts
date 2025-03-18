import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log("=== DEBUG: serverAuth called ===");
    console.log("Request method:", req.method);
    console.log("Request headers:", JSON.stringify(req.headers, null, 2));

    console.log("Auth options:", authOptions);

    const session = await getServerSession(req, res, authOptions);
    console.log("Session object:", session);

    if (!session?.user?.email) {
      console.error("Session not found or email missing");
      throw new Error("Not signed in");
    }

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    console.log("Current user:", currentUser);

    if (!currentUser) {
      console.error("User not found in database");
      throw new Error("Not signed in");
    }

    return { currentUser };
  } catch (error: unknown) {
    if (error instanceof Error){
    console.error("Server Auth Error:", error.message);
    } else{
    console.error("Unknown error occurred");
    }
    }
};

export default serverAuth;
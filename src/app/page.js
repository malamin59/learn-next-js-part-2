import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "@/lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="text-center">
      Hell, this is the home page of the Next.js application.
      <div className="flex justify-center mt-16">
        <LoginButton />
      </div>
      <div>from client components</div>
      <UserInfo />
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}

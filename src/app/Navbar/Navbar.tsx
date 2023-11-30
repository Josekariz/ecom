import logo from "@/assets/logo.png";
import { getCart } from "@/lib/db/cart";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
// import AddProductButton from "./AddProductButton";

async function searchProducts(formData: FormData) {
    "use server";

    const searchQuery = formData.get("searchQuery")?.toString();

    if (searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

export default async function Navbar() {
    const cart = await getCart();
    const session = await getServerSession(authOptions)

    return (
        <div className="bg-base-100">
            <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
                <div className="flex-1">
                    <Link href="/" className="btn-ghost btn text-xl normal-case">
                        <Image src={logo} height={40} width={40} alt="Flowmazon logo" />
                        Ecom
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input
                                name="searchQuery"
                                placeholder="Search"
                                className="input-bordered input w-full min-w-[100px]"
                            />
                        </div>
                    </form>
                    {/* <AddProductButton/> */}
                    <ShoppingCartButton cart={cart} />
                    <UserMenuButton session={session}/>
                </div>
            </div>
        </div>
    );
}
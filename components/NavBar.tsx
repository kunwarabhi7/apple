import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4  text-white">
      <div>
        <Link href="/">Apple Store</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
      <div>
        <ShoppingCartIcon />
      </div>
    </nav>
  );
};

export default NavBar;

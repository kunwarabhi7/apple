import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list();
  console.log(products);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1>Apple Clone</h1>
      <Button variant="ghost">Click ME</Button>
    </div>
  );
}

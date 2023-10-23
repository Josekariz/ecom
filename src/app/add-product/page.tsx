import React from "react";
import { redirect } from "next/navigation";
import prisma from "../../lib/db/prisma";
import SubmitButton from '../../components/SubmitButton';
export const metadata = {
  title: "Add product - Ecom",
};

async function addProduct(formData: FormData) {
  // a server endpoint to make post request
  "use server";
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required field(s)");
  }

  await prisma.product.create({ data: { name, description, imageUrl, price } });
  // redirect("/");
}

const AddProductPage = () => {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image Url"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <SubmitButton className="btn-block">
          Add Product
        </SubmitButton>
      </form>
    </div>
  );
};

export default AddProductPage;

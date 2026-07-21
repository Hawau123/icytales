import { Navigate, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductHero from "../components/Product/ProductHero";
import ProductGallery from "../components/Product/ProductGallery";
import ProductInfo from "../components/Product/ProductInfo";
import ProductTabs from "../components/Product/ProductTabs";
import RelatedProducts from "../components/Product/RelatedProducts";
  import {products } from "../data/products";

const ProductDetails = () => {
const { id } = useParams();

  const product = products.find(
    (currentProduct) => currentProduct.id === id
  );

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const relatedProducts = products
    .filter((currentProduct) => currentProduct.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <ProductHero />

      <main className="mx-auto w-full max-w-300 px-6 py-16 sm:py-20">
        <section className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </section>

        <ProductTabs product={product} />

        <div className="mt-24">
          <RelatedProducts relatedProducts={relatedProducts} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetails;